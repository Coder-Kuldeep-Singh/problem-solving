def Capitalize(text):
  string_blank  = ""
  text = text.lower().split(" ")  
  for idx in range(len(text)):
    # print(text[idx])
    length = text[idx]
    text1 = str(text[idx][0].upper())
    newtext = text1+text[idx][1:]
    string_blank += str(newtext) + " "
  string_blank = string_blank[:-1]
  return string_blank

text = "FSINS aDSFDF"
text = Capitalize(text)
print(text)

