
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib
import os

# # Load the provided JSON data
script_dir = os.path.dirname(os.path.realpath(__file__))

# Specify the relative path to the data folder
data_folder = os.path.join(script_dir, 'data')

# Specify the filename (replace 'file1.json' with the actual filename)
file_path = os.path.join(data_folder, 'MOCK_DATA.csv')

# Load the CSV file
# file_path = 'MOCK_DATA.csv'
df = pd.read_csv(file_path)

# Separate features and labels
X = df[['A', 'B', 'C', 'budget', 'age']]
y = df['history']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create a RandomForestClassifier
model = RandomForestClassifier(n_estimators=100, random_state=42)

# Train the model
model.fit(X_train, y_train)

# Make predictions on the test set
predictions = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, predictions)
print(f'Model Accuracy: {accuracy}')

# Save the trained model to a file
joblib.dump(model, 'trained_model.joblib')
