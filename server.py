import sys
import os
import json
filename = './data.json'

og_data = {"profiles": []}
new_data = []
with open (filename, "r") as f:
    temp = json.load(f)

for i in temp['profiles']:
    if i['Name'] == sys.argv[1]:
        small_data = []
        for j in i:
            if j == sys.argv[2]:
                small_data.append(int(sys.argv[3]))
                print('hi')
            else:
                small_data.append(i[j])
        new_data.append({"Name": small_data[0], "Character": small_data[1], "Storyline": small_data[2], "T_C_S_1": small_data[3], "T_C_L_1": small_data[4], "T_C_A_1": small_data[5], "B_C_L_1": small_data[6], "B_C_S_1": small_data[7], "B_C_A_1": small_data[8], "M_C_1": small_data[9]})
    else:
        new_data.append(i)


og_data["profiles"] = new_data
with open (filename, "w") as f:
    json.dump(og_data, f, indent=3)