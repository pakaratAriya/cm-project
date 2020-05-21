## IMPORTANT ##
## THIS FILE IS USED FOR CONVERTING FILE NAMES IN PUBLIC/IMAGES/??? ONLY ##

# TO USE THIS FILE TYPE [ py .\organizing_helper\changeFile.py [folder-to-change-the-name-in-images-folder]
#                       [name-to-change-to] ]

# EXAMPLE  [ py .\organizing_helper\changeFile.py PageInfoImages/HousePhotos gallery- ]

# NOTE make sure you are in castro-marketing folder

import os
import sys

# need 3 arguments to run the program
if len(sys.argv) < 3:
    print("Input is error")
    quit()

# get the pathname of the files from the first argument
pathname = os.getcwd() + '/public/images/'+ sys.argv[1]
arr = os.listdir(pathname)
filename, file_extension = os.path.splitext(pathname)
file_extension = "jpg"

# change the file name
for i in range(0, len(arr)):
    print(arr[i])
    os.rename(pathname + "/" + arr[i],pathname + "/" + sys.argv[2] + str(i) + "." + file_extension)
