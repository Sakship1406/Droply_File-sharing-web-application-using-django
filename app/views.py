# app/views.py

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import FileResponse
from django.shortcuts import render, redirect
from .models import File
from .serializers import FileSerializer
import shutil
import os


# Home Page
def home(request):
    return render(request, 'app/home.html')


# File Upload View
def upload_file(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        file = request.FILES.get('file')

        # Ensure both name and file are provided
        if name and file:
            File.objects.create(name=name, file=file)
            return redirect('file_list')
        else:
            return render(request, 'app/upload.html', {'error': 'Both name and file are required.'})

    return render(request, 'app/upload.html')


# File List View
def file_list(request):
    files = File.objects.all()
    return render(request, 'app/file_list.html', {'files': files})


# File Download API
@api_view(['GET'])
def download_file(request, pk):
    try:
        file = File.objects.get(pk=pk)
        file_path = file.file.path

        # Ensure the file exists on disk
        if os.path.exists(file_path):
            return FileResponse(open(file_path, 'rb'), as_attachment=True)
        else:
            return Response({"error": "File not found on disk"}, status=404)

    except File.DoesNotExist:
        return Response({"error": "File not found in the database"}, status=404)


# DRF ViewSet for API Management
class FileViewSet(viewsets.ModelViewSet):
    queryset = File.objects.all().order_by('-uploaded_at')
    serializer_class = FileSerializer
