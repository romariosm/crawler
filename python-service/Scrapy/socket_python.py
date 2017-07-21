from flask import Flask, render_template
from flask.ext.socketio import SocketIO, emit
#import pyWiki
from pyScraper import *
import Libraries.FileManager as fm
#from estructurador import *
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

#@app.route('/')
#def index():
#    return render_template('index.html')

@socketio.on('search politician', namespace='/')
def test_message(message):
	try:
		emit('my response', politic_scrapeTable(message))
	except Exception as  e:
		fm.registerError("Error en el scraper del personaje: " + str(error))
	else:
		pass
	finally:
		pass
	

if __name__ == '__main__':
    socketio.run(app)

    