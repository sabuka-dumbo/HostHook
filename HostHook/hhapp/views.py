from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def about_us(request):
    return render(request, 'about_us.html')

def pricing(request):
    return render(request, 'pricing.html')

def contact(request):
    return render(request, 'contact.html')