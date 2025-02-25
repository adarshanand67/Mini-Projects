import streamlit as st
import pandas as pd
import numpy as np
import seaborn as sns
import time
import matplotlib.pyplot as plt
import altair as alt

st.set_option("deprecation.showPyplotGlobalUse", False)

st.title("Learning Streamlit")

# st.header("This is a header")

st.text("Streamlit is helpful in deploying ML models")

# st.subheader("This is a subheader")

# st.text("This is a text")

# st.markdown("""
#             ✅ **This** is a markdown text<br>
#             <br>
#             <br>
#             # Ok google
#             """,True)

# st.latex(r"\alpha \beta \gamma")

# st.write("# Adarsh", "Kumar")
# st.write(st)

# st.write(sum) # Code documentations

dict = {
    "name": "Adarsh",
    "age": 22,
    "city": "Bangalore",
    "country": "India",
    "email": "adarsh1212@gmail.com",
}

# st.write(dict) # Showing the dictionary

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a = np.array(a)

nd = np.reshape(a, (2, 5))

df = sns.load_dataset("iris")

# st.dataframe(df, width=500)

# st.dataframe(nd)

# st.write(a)

# st.table(df)  # Display all the data in table format

# st.write(dict)

# st.json(dict)

# st.write(df)

# @st.cache
# def ret_time():
#     time.sleep(2)
#     return time.time()

# if st.checkbox("1"): # Checkbox
#     st.write(ret_time())

# if st.checkbox("2"):
#     st.write(ret_time()) # Uses same output in cache


chart_data = pd.DataFrame(np.random.randn(100, 3), columns=["a", "b", "c"])

# st.dataframe(chart_data)  # Showing the dataframe

# st.line_chart(chart_data)  # Line chart

# st.area_chart(chart_data)  # Area chart

# st.bar_chart(chart_data)  # Bar chart

# plt.scatter(chart_data['a'], chart_data['b'])
# plt.title("Scatter Plot")
# st.pyplot()  # Plotting the graph


# chart = alt.Chart(chart_data).mark_circle().encode(
#     x='a', y='b', tooltip=['a', 'b', 'c']
# )
# st.altair_chart(chart, use_container_width=True)  # Altair chart

# st.graphviz_chart("""
#                   digraph {
#                       a->b
#                       b->c
#                       c->d
#                       d->a
#                   }
#                   """) # Graphviz chart (Flowchart)

# other plotting libraries - seaborn , matplotlib , bokeh , plotly , altair

# city = pd.DataFrame({
#     "City name": ["Bangalore", "Mumbai", "Delhi", "Chennai", "Hyderabad"],
#     "latitude": [12.97, 19.07, 28.70, 13.08, 17.38],
#     "longitude": [77.56, 72.83, 88.36, 80.28, 79.47]
# })

# st.map(city)  # Map plotting - Needs latitude and longitude

# st.image('../Assets/Image/bash.jpeg', width=300, caption='Bash event') # Adding Image

# st.audio('../Assets/Video/Cepheus22_Teaser.mp4') # Adding Audio

# st.video('../Assets/Video/Cepheus22_Teaser.mp4', format="video/mp4") # Adding Video with format

# st.video('https://www.youtube.com/watch?v=jq0lKFb-P8k&list=PLuU3eVwK0I9PT48ZBYAHdKPFazhXg76h5&index=4') # Adding video from youtube

# Interactive widgets

# st.title("Interactive Widgets")

# if st.button("Click me"):
#     st.write("You clicked me")

# name = st.text_input("Enter your name", "Adarsh")
# st.write(name)

# address = st.text_area("Enter your address", "Bangalore")
# st.write(address)

# date = st.date_input("Date", value=pd.Timestamp('2020-01-01'))
# time = st.time_input("Time", value=pd.Timestamp('2020-01-01'))

# if date and time:
#     st.write(date, time)

# if st.checkbox("Accept terms and conditions",value=False):
#     st.write("You have accepted the terms and conditions")

# color =  st.radio("Choose your favorite color", ("Red", "Green", "Blue"),index=1)
# if color:
#     st.write("You have selected", color)

# st.write("You have selected", st.selectbox("Choose your favorite color", ("Red", "Green", "Blue")))

# num = st.number_input("Enter a number", value=10, min_value=0, max_value=100)
# st.write("Selected number is", num)

# st.write("You have entered", st.slider("Choose a number", 0, 100))

# st.write("You have selected", st.multiselect("Choose your favorite color", ("Red", "Green", "Blue")))

# st.slider("Choose your favorite number", min_value=0, max_value=100, value=5)

# file = st.file_uploader("Upload an image", type=["jpg", "png", "jpeg"])
# if file:
#     st.image(file)

# csv = st.file_uploader("Upload a csv file", type=["csv"])
# if csv:
#     df = pd.read_csv(csv)
#     st.dataframe(df)

# Sidebar

plt.style.use("seaborn")

data = {
    "num": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "square": [1, 4, 9, 16, 25, 36, 49, 64, 81, 100],
    "thrice": [1, 3, 6, 9, 12, 15, 18, 21, 24, 27],
    "twice": [2, 8, 18, 32, 50, 72, 98, 128, 162, 200],
}

df = pd.DataFrame(data)

# st.sidebar.header("Sidebar")

# col = st.sidebar.multiselect("Select a column", df.columns, key="column")

# if col:
#     plt.plot(df['num'], df[col])
#     st.pyplot()


# radio = st.sidebar.radio("Naviagte to", ("Home", "About", "Contact")) # Creating a multi page feeling in web app

# if radio == "Home":
#     st.write("Welcome to the home page")

# elif radio == "About":
#     st.write("Welcome to the about page")

# elif radio == "Contact":
#     st.write("Welcome to the contact page")

# # Status messages

# st.error("Error")
# st.success("Success")
# st.info("Info")
# st.exception(RuntimeError("Error"))
# st.warning("Warning")

# progress = st.progress(0) # Progress bar
# for i in range(100):
#     progress.progress(i+1)
#     time.sleep(0.05)

# st.balloons() # Adding balloons to the page
