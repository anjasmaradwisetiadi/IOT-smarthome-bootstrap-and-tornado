#! /usr/bin/python

import os.path
import tornado.httpserver
import tornado.websocket
import tornado.ioloop
import tornado.web
import RPi.GPIO as GPIO
import time

#def putarSudut(sudut):
    #siklus = ((sudut/180)+2.5)
    #pwm.ChangeDutyCycle(siklus)
    
#Initialize Raspberry PI GPIO
#GPIO.setwarnings(False)
#GPIO.setmode(GPIO.BCM)
#GPIO.setup(16, GPIO.OUT)
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.OUT)
GPIO.setup(13, GPIO.OUT)
GPIO.setup(16, GPIO.OUT)
GPIO.setup(18, GPIO.OUT)
GPIO.setup(22, GPIO.OUT)
#GPIO.setup(24, GPIO.OUT)

sebelas=11
#tigabelas=13

pwm=GPIO.PWM(sebelas, 50)
#pwm=GPIO.PWM(tigabelas, 50)
pwm.start(0)




#pinServo=11
 

#Tornado Folder Paths
settings = dict(
	template_path = os.path.join(os.path.dirname(__file__), "templates"),
	static_path = os.path.join(os.path.dirname(__file__), "static")
	)

#Tonado server port
PORT = 80

class MainHandler(tornado.web.RequestHandler):
  def get(self):
     print "[HTTP](MainHandler) User Connected."
     self.render("login_rpl_1.html")


	
class WSHandler(tornado.websocket.WebSocketHandler):
  def open(self):
    print '[WS] Connection was opened.'
 
  def on_message(self, message):
    print '[WS] Incoming message:', message
    #control LED 1
    if message == "on_g":
        GPIO.output(18, True)

    if message == "off_g":
	GPIO.output(18, False)
	
    #control LED 2
    if message == "on1_g":
        GPIO.output (22, True)
    
    if message == "off1_g":
        GPIO.output (22, False)
        
    #control LED 3
#    if message == "nyala":
#        GPIO.output (24, True)
    
#    if message == "mati":
#        GPIO.output (24, False)

    #control relay
    if message == "on_TV":
	GPIO.output(16, True)
		
    if message == "off_TV":
	GPIO.output(16, False)
    
    #control Servo lockdoor
    if message == "on_kirim":
        pwm.ChangeDutyCycle(9)
        time.sleep(2)
        
    if message == "off_Pagar_kirim":
        pwm.ChangeDutyCycle(3.6)
        time.sleep(2)
        
    #control Servo Garansi
    #if message == "on_kirim_data_Pagar":
     #   pwm.ChangeDutyCycle(9)
      #  time.sleep(1)
        
    #if message == "off_kirim_data_Pagar":
        #pwm.ChangeDutyCycle(2)
        #time.sleep(1)

  def on_close(self):
    print '[WS] Connection was closed.'


application = tornado.web.Application([
  (r'/(favicon.ico)', tornado.web.StaticFileHandler, {"path": ""}),
  (r'/', MainHandler),
  (r'/ws', WSHandler),
  ], **settings)


if __name__ == "__main__":
    try:
        http_server = tornado.httpserver.HTTPServer(application)
        http_server.listen(PORT)
        main_loop = tornado.ioloop.IOLoop.instance()

        print "Tornado Server started"
        main_loop.start()

    except:
        print "Exception triggered - Tornado Server stopped."
        GPIO.cleanup()

#End of Program
