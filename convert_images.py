import base64

def convert(filepath):
    if 'png' in filepath: 
        prefix = 'data:image/png;base64,'
    elif 'jpg' in filepath or 'jpeg' in filepath: 
        prefix = 'data:image/jpeg;base64,'
    with open(filepath, 'rb') as f:
        data = f.read()
        encoded = base64.b64encode(data).decode('utf-8')
        return prefix + encoded

with open('./images.js') as raw:
    with open('./images_converted.js', 'w') as output:
        while True:
            line = raw.readline()
            if len(line) == 0: break
            if len(line) == 1: continue
            line = line.strip()
            end = len(line)
            if line[end - 1] == ';': end -= 1
            suffix = line[end - 5: end]
            if not 'png' in suffix and not 'jpg' in suffix: 
                output.write(line)
                output.write(';')
                output.write('\n')
                continue
            var_name_start = line.index(' ') + 1
            var_name_end = line.index('=')
            var_name = line[var_name_start:var_name_end].strip()
            filepath_start = line.index('\'') + 1
            filepath_end = line.rindex('\'')
            filepath = line[filepath_start:filepath_end]
            output.write(f'let {var_name} = \'{convert(filepath)}\';\n')
