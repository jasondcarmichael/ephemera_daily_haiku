from rest_framework import serializers
from .models import User, Haiku

class UserSerializer(serializers.HyperlinkedModelSerializer):
    haikus = serializers.HyperlinkedRelatedField(
        view_name = 'haiku_detail',
        many = True,
        read_only = True
    )
    user_url = serializers.ModelSerializer.serializer_url_field(
        view_name = 'user_detail'
    )
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'password', 'tagline', 'image_url', 'haikus')
        fields = ('id', 'user_url', 'name', 'email', 'password', 'tagline', 'image_url', 'haikus')

class HaikuSerializer(serializers.HyperlinkedModelSerializer):
    users = serializers.HyperlinkedRelatedField(
        view_name = 'user_detail',
        read_only = True
    )
    user_id = serializers.PrimaryKeyRelatedField(
        queryset = User.objects.all(),
        source = 'user'
    )
    class Meta:
        model = Haiku
        fields = ('id', 'title', 'body', 'created_on', 'users')
        fields = ('id', 'user_id', 'title', 'body', 'created_on', 'users')