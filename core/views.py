from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, 'core/home.html')

def login(request):
    return render(request, 'accounts/login.html')

def dashboard(request):
    return render(request, 'administration/dashboard.html')

def htmx_test(request):
    return HttpResponse('<div class="alert alert-success">HTMX is working!</div>')
