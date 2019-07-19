#!/usr/bin/env python
# coding: utf-8

# # Caesar Cipher Program
# 
# Created 2019-07-21 by Katt Baum
# 
# This program will encode and decode messages with the Caesar Cipher method, a monoalphabetic substitution cipher, that involves shifting all of the letters of the alphabet by a certain offset.
# 

# ## Table of Contents
# 
# [Global Variables](#Global-Variables)  
# [Cipher Functions](#Cipher-Functions)  
# [Cipher Tests](#Cipher-Tests)  
# - [Cipher Test Variables](#Cipher-Test-Variables)   
# - [Cipher Test Results](#Cipher-Tests-Results)   
# 
# [Bot Variables](#Bot-Variables)  
# [Bot Functions](#Bot-Functions)   
# **[Run Program](#Run-Program)**   
# 

# ### Global Variables
# 
# [Return to Table of Contents](#Table-of-Contents)

# In[2]:


alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
punctuation = [" ", ",", "!", "?", ".", "%", "/", "(", ")", "-", "'", '"']


# ### Cipher Functions
# 
# [Return to Table of Contents](#Table-of-Contents)

# In[3]:


#Creates a list contains the letters of the alphabet based on the offset provided
def create_offset_alpha(offset):    
    offset_alpha = []
    for x in range(offset):
        offset_alpha.append(alphabet[26-offset+x]) #adds the ending letters of the alphabet in order to list
    for x in range(26-offset):
        offset_alpha.append(alphabet[x]) #adds the remaining letter of the alphabet in order to list
    return offset_alpha

#Creates a dictionary by combining the offset alphabet with the standard alphabet
def create_decode_dict(offset):
    offset_alpha = create_offset_alpha(offset)
    decode_dict = {key: value for key, value in zip(offset_alpha, alphabet)}
    return decode_dict

#Creates a dictionary by combining the standard alphabet with the offset alphabet 
def create_encode_dict(offset):
    offset_alpha = create_offset_alpha(offset)
    encode_dict = {key: value for key, value in zip(alphabet, offset_alpha)}
    return encode_dict

#Decodes messages
def decode_message(offset, message):
    decode_dict = create_decode_dict(offset)
    decoded_message = ''
    for x in message:
        if x in decode_dict.keys():
            decoded_message += decode_dict[x]
        elif x in punctuation:
            decoded_message += x
        else:
            decoded_message += "_"
    return decoded_message

#Encodes messages
def encode_message(offset, message):
    encode_dict = create_encode_dict(offset)
    encoded_message = ''
    for x in message:
        if x in encode_dict.keys():
            encoded_message += encode_dict[x]
        elif x in punctuation:
            encoded_message += x
        else:
            encoded_message += "_"
    return encoded_message

#Decodes message by running through all possible offsets
def brute_force_decode(message):
    for x in range(len(alphabet)):
        print(decode_message(x, message) + "\n")


# ### Cipher Tests
# 
# [Return to Table of Contents](#Table-of-Contents)

# #### Cipher Test Variables

# In[4]:


#offset_test1 = 3
#decode_message_test1 = "ebiil"
#encode_message_test1 = "hello"
#offset_test2 = 10
#decode_message_test2 = "xuo jxuhu! jxyi yi qd unqcfbu ev q squiqh syfxuh. muhu oek qrbu je tusetu yj? y xefu ie! iudt cu q cuiiqwu rqsa myjx jxu iqcu evviuj!"
#encode_message_test2 = "hey there! this is an example of a caesar cipher. were you able to decode it? i hope so! send me a message back with the same offset!"
#brute_force_message_test = "vhfinmxkl atox kxgwxkxw tee hy maxlx hew vbiaxkl tl hulhexmx."


# #### Cipher Test Results

# In[5]:


#print(decode_message(offset_test1, decode_message_test1) + "\n")
#print(encode_message(offset_test1, encode_message_test1) + "\n")
#print(decode_message(offset_test2, decode_message_test2) + "\n")
#print(encode_message(offset_test2, encode_message_test2) + "\n")
#brute_force_decode(brute_force_message_test)


# ### Bot Variables
# 
# [Return to Table of Contents](#Table-of-Contents)

# In[6]:


response_number_text = "Please enter the number corresponding to your choice: "
error_text = "\nSorry, we didn't understand your input.\n\n"


# ### Bot Functions
# 
# [Return to Table of Contents](#Table-of-Contents)

# In[7]:


#Initiates cipher bot with encode, decode, and brute force choices
def cipher_bot():
    welcome_message = "Hello! Welcome to Caesar Cipher! What would you like to do today?\n"
    welcome_choices = " [1] Encode a message with chosen offset\n [2] Decode a message with chosen offset\n [3] Decode a message with brute force\n [4] Exit"
    print(welcome_message + welcome_choices)
    response = input(response_number_text)
    if response == "1": #Calls encode bot
        encode_bot()
    elif response == "2": #Calls eecode bot
        decode_bot()
    elif response == "3": # Calls brute force bot
        brute_force_bot()
    elif response == "4": # exit
        print("\nGoodbye!")
    else:
        print(error_text)
        cipher_bot()

#Gathers offset and message input to encode message
def encode_bot():
    offset_request_message = "\nPlease provide an offset (between 0 and 26): "
    message_request_message = "\nPlease provide a message to encode (in lowercase): "
    offset_response = int(input(offset_request_message))
    message_response = str(input(message_request_message))
    if offset_response > 0 and offset_response < 26:
        print("\nENCODED TEXT: " + encode_message(offset_response, message_response) + "\n\n")
        return_to_menu()
    else:
        print(error_text + "\nCheck offset input.\n\n")
        encode_bot()

#Gathers offset and message input to decode message
def decode_bot():
    offset_request_message = "\nPlease provide an offset (between 0 and 26): "
    message_request_message = "\nPlease provide a message to decode (in lowercase): "
    offset_response = int(input(offset_request_message))
    message_response = str(input(message_request_message))
    if offset_response > 0 and offset_response < 26:
        print("\nDECODED TEXT: " + decode_message(offset_response, message_response) + "\n\n")
        return_to_menu()
    else:
        print(error_text + "\nCheck offset input.\n\n")
        decode_bot()

#Gathers message input to use brute force to decode message
def brute_force_bot():
    message_request_message = "\nPlease provide a message to decode (in lowercase): "
    message_response = str(input(message_request_message))
    print("\n")
    brute_force_decode(message_response)
    print("\n\n")
    return_to_menu()

#Provides choice to use program again or to exit
def return_to_menu():
    continue_message = "Would you like to use the program again?\n"
    continue_choices = " [1] Yes\n [2] No\n"
    print(continue_message + continue_choices)
    response = input(response_number_text)
    if response == "1": #Calls cipher bot
        cipher_bot()
    else:
        print("\nGoodbye!")


# ### Run Program
# 
# [Return to Table of Contents](#Table-of-Contents)

# In[8]:


cipher_bot()

