
path = 'combined_mini.js'
output_path = 'combined_mini_line.txt'

with open(path) as input_file:
    with open(output_path, 'w') as output_file:
        while True:
            char = input_file.read(1)
            if not char: break
            if char.isspace() and char != ' ': output_file.write(';')
            else: output_file.write(char)

