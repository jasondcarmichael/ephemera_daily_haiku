from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User, Haiku

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

class UserSerializer(serializers.HyperlinkedModelSerializer):
    haikus = HaikuSerializer(
        many = True,
        read_only = True
    )
    email = serializers.EmailField(required=True)
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'username', 'email', 'password', 'tagline', 'image_url', 'haikus')
        extra_kwargs = {'write_only': True}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
        

        
# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     haikus = serializers.HyperlinkedRelatedField(
#         view_name = 'haiku_detail',
#         many = True,
#         read_only = True
#     )
#     user_url = serializers.ModelSerializer.serializer_url_field(
#         view_name = 'user_detail'
#     )
#     class Meta:
#         model = User
#         fields = ('id', 'name', 'email', 'password', 'tagline', 'image_url', 'haikus')
#         fields = ('id', 'user_url', 'name', 'email', 'password', 'tagline', 'image_url', 'haikus')

# class HaikuSerializer(serializers.HyperlinkedModelSerializer):
#     users = serializers.HyperlinkedRelatedField(
#         view_name = 'user_detail',
#         read_only = True
#     )
#     user_id = serializers.PrimaryKeyRelatedField(
#         queryset = User.objects.all(),
#         source = 'user'
#     )
#     class Meta:
#         model = Haiku
#         fields = ('id', 'title', 'body', 'created_on', 'users')
#         fields = ('id', 'user_id', 'title', 'body', 'created_on', 'users')