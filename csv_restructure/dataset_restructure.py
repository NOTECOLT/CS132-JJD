import pandas as pd
import csv

path = "./CS132-JJD/csv_restructure/ds.csv"
entries = [["Geolocation", "Commodity Description", "CPI", "Year", "Month"]]
idx = 0

'''Read the csv file and formulate the entries to be used in the new file'''
with open(path, "r") as file:
  f = csv.reader(file)
  year = next(f)
  month = next(f)
  for row in f:
    idx = 0
    for col in row:
      # Disregard the first two columns as they are blank
      if idx < 2: idx += 1
      else:
        # Create an entry that will represent a row in the new dataset
        entries.append([f"{row[0]}", f"{row[1]}", f"{row[idx]}" ,f"{year[idx]}", f"{month[idx]}"])
        idx += 1
file.close()

'''Write the entries to the new csv file'''
with open("./CS132-JJD/csv_restructure/dataset.csv", "w") as file:
  f = csv.writer(file)
  for row in entries:
    f.writerow(row)
file.close()