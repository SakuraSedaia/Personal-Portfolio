a = 1 # int variable
b = 1.1 # float variable
c = True # bool
c = False # bool
d = "Kyro is Awesome" # string

# This is a comment

'''
This is also a comment
'''
'''
if (1 != 2):
    print("This is true")

x = 0
while x < 10:
  # print(x)
  x += 1

running = True
x = 0
while running:
  # print("running")
  x += 1
  if x == 10:
    running = False


def f(x):
  return x ** 2

print(f(2))

def addNums(num1, num2):
  # print(num1)
  num1 += 1
  return num1 + num2

print(addNums(2, 3))
'''

'''
def function():
  pass

def function1():
  global function
  function()


class Player():
  def __init__(self, name, number, bestTime):
    self.number = number
    self.time = bestTime
    self.name = name
    self.randomThing = "poooooop"
    self.good = True
  
  def introduce(self):
    print("Hello, I'm, " + self.name)
    print(self.randomThing)

player1 = Player("Kyro", 1, '2:20')
player1.introduce()
'''

personAMeetings = [('8:00', '9:00'), ('12:00', '13:00'), ('15:30', '16:00')]

personBMeetings = [('9:00', '10:00'), ('13:30', '14:00'), ('15:00', '15:30')]


def getBase10(meetingList):
  for meeting in meetingList:
    startTime = meeting[0]
    starttime = ''
    for element in startTime:
      if element == ':':
        a = startTime[startTime.index(element) + 1]
        b = startTime[startTime.index(element) + 2]
        minutes = a + b
        print(minutes)
        print(int(minutes))

        for i in range(0, startTime.index(element)):
          starttime += element[i]
        print(starttime)
      '''
      if element == ':' and startTime[startTime.index(element) + 1] != '0' and startTime[startTime.index(element) + 2] != '0':
        break
      else:
        starttime += element
      '''
    print(starttime)

    '''
    for element in range(0, startTime.find(':')):
      #print(meeting[element])
      #print(" ")
      print(startTime[element])
      # starttime += int(meeting[element])
    '''
    
    print(" ")

  # starttime = int(starttime)
  return starttime

getBase10(personAMeetings)
