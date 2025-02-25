import streamlit as st
import pandas as pd
import numpy as np
import seaborn as sns
import time
import matplotlib.pyplot as plt
import altair as alt

st.set_option("deprecation.showPyplotGlobalUse", False)

# Creating a simple registration form (basics)

st.title("Learning Streamlit")

st.subheader("Creating a simple Registraion Form")

first, last = st.columns(2)

first.text_input("First Name")
last.text_input("Last Name")

email, mobile = st.columns([3, 1])

email.text_input("Email")
mobile.text_input("Mobile")


username, password, retypePassword = st.columns([3, 2, 2])

username.text_input("Username")
password.text_input("Password", type="password")
retypePassword.text_input("Retype Password", type="password")


checkbox, blank, submit_button = st.columns(3)

checkbox.checkbox("I agree to the terms and conditions")
submit_button.button("Submit")
