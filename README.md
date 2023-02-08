# Chat app (Django Channels + React)

## Django

### Go to server folder:
```
cd chat-server
python3 -m venv env
```
### Ubuntu/Mac:

```
source env/bin/activate
```

### Windows:

```
source env\Scripts\activate
```

### Install Django:
```
pip install -r requirements.txt
```

### Run Redis:
```
docker run -p 6379:6379 -d redis:5
```

**Set your SECRET_KEY in settings.py:**
```
SECRET_KEY='YOUR_SECRET_KEY'
```

Run project:
```
python manage.py runserver
```

## React App

```
cd chat-frontend
npm install
```

**Set the .env file:**
```
VITE_CHAT_HOST='ws://YOUR_SERVER_ORIGIN'
```

### Run your dev server

```
npm run dev
```