import placesData from "@/data/exotic-places.json"

export function getAllPlaces() {
    return placesData
}

export function getPlaceById(id) {
    return placesData.find((place) => place.id === id)
}