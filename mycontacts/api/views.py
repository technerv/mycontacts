from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework import generics, permissions
from knox.models import AuthToken
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.decorators import api_view
from .serializers import ContactListSerializer, UserSerializer, RegisterSerializer
from phonebook import models
from phonebook.models import ContactList
from django.views.decorators.csrf import csrf_exempt


#Endpoint to show all contacts
class ShowAllContacts(APIView):

	def get(self, request):

		queryset = ContactList.objects.all()
		serializer_class = ContactListSerializer(queryset, many=True)
		return Response(serializer_class.data)

#Update
class UpdateContact(generics.RetrieveUpdateAPIView):
    queryset = ContactList.objects.all()
    serializer_class = ContactListSerializer

#Create
class CreateContact(generics.CreateAPIView):
    queryset = ContactList.objects.all()
    serializer_class = ContactListSerializer
    
#Delete
class DeleteContact(generics.RetrieveUpdateDestroyAPIView):
	queryset = ContactList.objects.all()
	serializer_class = ContactListSerializer

# Register User API
class RegisterAPI(generics.GenericAPIView):
	serializer_class = RegisterSerializer

	def post(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.save()
		return Response({
			"user": UserSerializer(user,context=self.get_serializer_context()).data,
			"token": AuthToken.objects.create(user)[1]
			})

from django.contrib.auth import login
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView

class LoginAPI(KnoxLoginView):
	permission_classes = (permissions.AllowAny,)

	@csrf_exempt
	def post(self, request, format=None):
		serializer = AuthTokenSerializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.validated_data['user']
		login(request, user)
		return super(LoginAPI, self).post(request, format=None)
