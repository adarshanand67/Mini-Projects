import streamlit as st
import pandas as pd
from sklearn import datasets
import numpy as np
import seaborn as sns
from sklearn.ensemble import RandomForestClassifier
import matplotlib.pyplot as plt

st.set_option("deprecation.showPyplotGlobalUse", False)

st.write(
    """
# Simple Iris Flower Prediction App
This app predicts the **Iris flower** type using input.
Click on the sidebar to input the following parameters:
- Sepal Width
- Sepal Length
- Petal Width
- Petal Length
"""
)

st.image(
    "https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Machine+Learning+R/iris-machinelearning.png"
)

st.sidebar.header("User Input Parameters")


def user_input_features():
    sepal_length = st.sidebar.slider("Sepal length", 4.3, 7.9, 5.4)
    sepal_width = st.sidebar.slider("Sepal width", 2.0, 4.4, 3.4)
    petal_length = st.sidebar.slider("Petal length", 1.0, 6.9, 1.3)
    petal_width = st.sidebar.slider("Petal width", 0.1, 2.5, 0.2)

    data = {
        "sepal_length": sepal_length,
        "sepal_width": sepal_width,
        "petal_length": petal_length,
        "petal_width": petal_width,
    }

    features = pd.DataFrame(data, index=[0])

    return features


df = user_input_features()


data = sns.load_dataset("iris")

if st.checkbox("Show csv data"):
    st.dataframe(data.head(), width=700)


st.subheader("User Input parameters")
# Show entire space in df
st.dataframe(df, width=700)

iris = datasets.load_iris()
X = iris.data
Y = iris.target

clf = RandomForestClassifier()
clf.fit(X, Y)

prediction = clf.predict(df)
prediction_proba = clf.predict_proba(df)


setosa = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kosaciec_szczecinkowaty_Iris_setosa.jpg/330px-Kosaciec_szczecinkowaty_Iris_setosa.jpg"
versicolor = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Iris_versicolor_3.jpg/330px-Iris_versicolor_3.jpg"
virginica = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Iris_virginica.jpg/330px-Iris_virginica.jpg"


st.subheader("Class labels and their corresponding index number")
st.dataframe(iris.target_names, width=700)

st.subheader("Prediction")
# Center the image
col1, col2, col3 = st.beta_columns([1, 6, 1])

with col1:
    st.write("")

with col2:
    if prediction == 0:
        st.image(setosa, width=400)
    elif prediction == 1:
        st.image(versicolor, width=400)
    else:
        st.image(virginica, width=400)

with col3:
    st.write("")

st.write("Predicted flower *Species* is ", str(iris.target_names[prediction]))


st.subheader("Prediction Probability")
st.write(
    """
    Predicted probability of **setosa** is  **{:.2f}%**

    Predicted probability of **versicolor** is  **{:.2f}%**

    Predicted probability of **virginica** is  **{:.2f}%**
    """.format(
        prediction_proba[0][0] * 100,
        prediction_proba[0][1] * 100,
        prediction_proba[0][2] * 100,
    )
)

# Pair plots

st.subheader("EDA")

if st.checkbox("Show EDA?"):

    sns.pairplot(data, hue="species", palette="Dark2")
    st.pyplot()

    plt.title("Species Count")
    plt.figure(figsize=(5, 3))
    sns.countplot(data["species"])
    st.pyplot()

    fig = plt.figure(figsize=(5, 3))
    new_corr = data.corr()
    matrix = np.triu(new_corr)
    sns.heatmap(
        data.corr(),
        annot=True,
        vmin=-1,
        vmax=1,
        center=0,
        cmap="Blues",
        fmt=".2f",
        mask=matrix,
        linewidths=0.5,
        square=True,
        linecolor="white",
        annot_kws={"size": 10},
        cbar=True,
    )
    st.pyplot()

    fig, axes = plt.subplots(2, 2, figsize=(16, 9))

    sns.FacetGrid(data, hue="species", height=5).map(
        sns.distplot, "petal_width", ax=axes[0, 0]
    ).add_legend()
    st.pyplot()

    sns.FacetGrid(data, hue="species", height=5).map(
        sns.distplot, "petal_length", ax=axes[0, 1]
    ).add_legend()
    st.pyplot()

    sns.FacetGrid(data, hue="species", height=5).map(
        sns.distplot, "sepal_length", ax=axes[1, 0]
    ).add_legend()
    st.pyplot()

    sns.FacetGrid(data, hue="species", height=5).map(
        sns.distplot, "sepal_width", ax=axes[1, 1]
    ).add_legend()
    st.pyplot()

    fig, axes = plt.subplots(2, 2, figsize=(16, 9))
    sns.violinplot(y="petal_width", x="species", data=data, orient="v", ax=axes[0, 0])
    sns.violinplot(y="petal_length", x="species", data=data, orient="v", ax=axes[0, 1])
    sns.violinplot(y="sepal_length", x="species", data=data, orient="v", ax=axes[1, 0])
    sns.violinplot(y="sepal_length", x="species", data=data, orient="v", ax=axes[1, 1])
    st.pyplot()

# Insert HTML link
st.write(
    """
    For complete analysis of dataset variables, please click on the link below:
    [Click here](https://web-app-for-iris-dataset-6bfdiwckm-adarshanand67.vercel.app/)
    """
)

st.write("Made with ❤️ by [@Adarsh Anand](https://github.com/AdarshAnand67)")
