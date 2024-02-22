from bs4 import BeautifulSoup
import requests
import json
import jsonify
import json
import os
import re
import random
# with open("website.html", encoding='utf-8') as file:
#     data = file.read()
#
# soup = BeautifulSoup(data, "html.parser")
# print(soup.title)
tempdata={

}

def write_to_json():
    try:
        # Specify the file path
        json_file_path = './location_data.json'

        # Open the file in write mode
        with open(json_file_path, 'w') as json_file:
            # Write the data to the file
            json.dump(tempdata, json_file)

        # Return a success message
        return jsonify({"message": "Data written to JSON file successfully!"})

    except Exception as e:
        # Handle exceptions, log the error, etc.
        return jsonify({"error": str(e)})



def mainfunc(location):
    response = requests.get(f"https://www.javatpoint.com/{location}")
    yc_webpage = response.text
    soup = BeautifulSoup(yc_webpage, "html.parser")

    # Find all h2 tags representing locations
    location_tags = soup.find_all('h2', class_='h2')
    
    # List to store location information
    locations = []

    for location_tag in location_tags:
        # Extract information about each location
        location_info = {}

        # Extract location name from h2 tag
        location_info['name'] = location_tag.text.strip()

        # Extract corresponding p tag (location info)
        next_p_tag = location_tag.find_next('p')
        location_info['info'] = next_p_tag.text.strip() if next_p_tag else ''

        # Extract image src from the corresponding img tag
        img_tag = location_tag.find_next('img')
        location_info['image_src'] = img_tag['src'] if img_tag and 'src' in img_tag.attrs else ''

        # Append the location information to the list
        locations.append(location_info)

    # Add link to each location
    for location_info in locations:
        location_info['link'] = location

    # Return the list of location information
    return locations
# mainfunc("mumbai")


def collectdata():
    links_file = 'links.json'
    location_data_files = ['locationdata1.json', 'locationdata2.json', 'locationdata3.json']

    # Check if location data files exist; if not, create them with empty lists as initial data
    for location_data_file in location_data_files:
        if not os.path.exists(location_data_file):
            with open(location_data_file, 'w') as json_file:
                json.dump([], json_file)

    # Open and read the JSON file with links
    with open(links_file, 'r') as json_file:
        links_data = json.load(json_file)

    # Process each link and append the data to the location data files
    for index, link_item in enumerate(links_data):
        link_data = mainfunc(link_item)
#       formatted_data = [item.replace('\n', '') for item in json_data]

# # # Load each string as JSON
#         json_data2 = [json.loads(item) for item in formatted_data]


        # Open the location data file in read mode
        with open(location_data_files[index % 3], 'r') as json_file2:
            try:
                data2 = json.load(json_file2)
            except json.JSONDecodeError:
                # Handle the case where the file is empty or not a valid JSON
                data2 = []

        # Append new data to the existing data
        for item in link_data:
            data2.append(item)

        # Write the updated data back to the location data file
        with open(location_data_files[index % 3], 'w') as json_file3:
            json.dump(data2, json_file3, indent=2)

# collectdata()
# 

def extract_location_names(json_data):
    location_names = []

    for json_list in json_data:
        for item in json_list:
            print(item)
            if isinstance(item, str):
                matches = re.findall(r'^\s*\d+\.\s*(.+)$', item, re.MULTILINE)
                location_names.extend(matches)

    return location_names

# # Load the provided JSON data
script_dir = os.path.dirname(os.path.realpath(__file__))

# Specify the relative path to the data folder
data_folder = os.path.join(script_dir, 'data')

# Specify the filename (replace 'file1.json' with the actual filename)
file_path = os.path.join(data_folder, 'locationdata3.json')

# Open the JSON file
with open(file_path, 'r') as json_file:
    # Load JSON data
    data = json.load(json_file)
tempdata= data
for item in tempdata:
    item["budget"] = round(random.uniform(3000,50000),0)
with open('locationdata3.json', 'w') as json_file3:
    json.dump(tempdata, json_file3, indent=2)

# organized_data = {}
# # data=data[:30]
# # Process each item in the original data
# for item in data:
#     # Extract the last city name from the link
#     city_name = item["link"].split("-")[-1]
#     if city_name == "pradesh":
#         city_name=item["link"].split("-")[-2]+item["link"].split("-")[-1]

#     # print(city_name)    
#     # Check if the city_name is already a key in the dictionary
#     if city_name not in organized_data:
#         organized_data[city_name] = []

#     # Append the item to the corresponding array
#     organized_data[city_name].append(item['name'])

# Convert the dictionary to a list of arrays
# result = list(organized_data.values())

# Convert the list to JSON
# result_json = json.dumps(result, indent=2)
# print(organized_data)
# formatted_data = [item.replace('\n', '') for item in json_data]

# # Load each string as JSON
# json_data2 = [json.loads(item) for item in formatted_data]

# # Print the result
# with open('locationcitywise.json', 'w') as json_file3:
    # json.dump(organized_data, json_file3, indent=2)

# print(json_data2)

# Extract location names
# location_names = extract_location_names(json_data)
# print(json_data)
# Save location names to a new JSON file
# with open('location_names.json', 'w') as json_file:
    # json.dump(location_names, json_file, indent=2)
    