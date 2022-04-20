from rest_framework import serializers
from .models import Account

class AccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = Account
        fields = ('company_name', 'company_id', 'date_incorporation', 'address_1', 'address_2')
