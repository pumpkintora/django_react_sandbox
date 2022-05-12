from rest_framework import serializers
from .models import (Account, MyAccountManager, Users)

class AccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = Account
        fields = ('pk', 'company_name', 'company_id', 'date_incorporation', 'address_1', 'address_2')

class RegistrationSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = [
            "name",
            "Email_Address",
            "zipcode",
            "Date_of_Birth",
            "password",

        ]

        extra_kwargs = {"password": {"write_only": True}}
        password = self.validated_data["password"]
        account.set_password(password)
        account.save()
        return account