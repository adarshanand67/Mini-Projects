'''
    Adarsh Anand
    Get the distance between two locations using the geopy library
    https://pypi.org/project/geopy/
'''

from geopy.geocoders import Nominatim
from geopy import distance

def location():
    """ A program to calculate distance between two geo-locations
        Parameters:
            firstlocation (str): The starting location of user
            secondlocation (str): The final location of user
    """

    geolocator = Nominatim(user_agent="geoapiExercises")

    first_location = input("Enter the starting location: ")
    second_location = input("Enter the final location: ")

   # calculating longitude and latitude of entered locations """
    try:
        first_location = geolocator.geocode(first_location)
        second_location = geolocator.geocode(second_location)

        # Getting latitude and longitude of entered locations
        Loc1_lat, Loc1_lon = (
            first_location.latitude), (first_location.longitude)

        Loc2_lat, Loc2_lon = (
            second_location.latitude), (second_location.longitude)

        location1 = (Loc1_lat, Loc1_lon)
        location2 = (Loc2_lat, Loc2_lon)

        # calculating and printing distance between locations in Kilometers and Miles

        # print upto 3 decimal places

        res = ((distance.distance(location1, location2).km))
        res = round(res, 3)
        distance_miles = round(float(res)*0.621, 3)

        # print distance in table format

        print(f"Distance is: {res} Km")
        print(f"{distance_miles} Miles")
    except:
        print("Invalid Location")


if __name__ == "__main__":
    location()
