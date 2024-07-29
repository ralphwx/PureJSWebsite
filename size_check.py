
import os
import base64

directory = './images/'
sizes = []
for path in os.listdir(directory):
    full_path = directory + path
    with open(full_path, 'rb') as image_file:
        data = image_file.read()
        encoded = base64.b64encode(data).decode('utf-8')
        sizes.append((path, int(len(encoded) / 1000)))

def pad(string, length):
    output = [string]
    l = len(string)
    while l < length:
        output.append(' ')
        l += 1
    return ''.join(output)

sizes.sort(reverse=True, key=lambda x: x[1])
for path, size in sizes:
    print(pad(path, 30), size)

total = sum(x[1] for x in sizes)
print(pad("Total", 30), total)
