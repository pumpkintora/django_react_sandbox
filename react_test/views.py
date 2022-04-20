from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Account
from .serializers import *

@api_view(['GET', 'POST'])
def accounts_list(request):
    if request.method == 'GET':
        data = Account.objects.all()
        serializer = AccountSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AccountSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def accounts_detail(request, pk):
    try:
        Account = Account.objects.get(company_name='aptvise')
    except Account.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = AccountSerializer(Account, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Account.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)