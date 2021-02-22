import { Destination, PassengerInfo, PaymentMethod, TravelCard, TravelInfo } from "../models/models";

export const INITIAL_TRAVEL_CARDS: TravelCard[] = [
    {
        passengerInfo: {
            profileImage: "assets/images/profile1.jpg",
            completeName: "Nora M. Buchanan",
            interactions: 4,
            email: "invision@invisionapp.com",
            phone: "+144-3412-4422",
            location: "New York, NY"
        },
        paymentMethods: [{
            name: "paypal",
            iconClass: "fab fa-cc-paypal",
            isActive: false,
        },
        {
            name: "visa",
            iconClass: "fab fa-cc-visa",
            isActive: true,
        },
        {
            name: "mastercard",
            iconClass: "fab fa-cc-mastercard",
            isActive: false,
        },
        {
            name: "applePay",
            iconClass: "fab fa-cc-apple-pay",
            isActive: false,
        }],
        destination: {
            origin: "Jackson Heights",
            originAddress: "37-27 74th Street",
            destination: "Greenpoint",
            destinationAddress: "81 Gate St Brooklyn"
        },
        travelInfo: {
            distance: 12.3,
            time: 42,
            price: 34.2,
            energy: 12.4
        },
        hiddenTravelInfo: false
    },
    {
        passengerInfo: {
            profileImage: "assets/images/profile2.jpg",
            completeName: "Brayan Watson",
            interactions: 1,
            email: "jwatson@gmail.com",
            phone: "+187-0028-2598",
            location: "Huston, Texas"
        },
        paymentMethods: [{
            name: "paypal",
            iconClass: "fab fa-cc-paypal",
            isActive: false,
        },
        {
            name: "visa",
            iconClass: "fab fa-cc-visa",
            isActive: false,
        },
        {
            name: "mastercard",
            iconClass: "fab fa-cc-mastercard",
            isActive: false,
        },
        {
            name: "applePay",
            iconClass: "fab fa-cc-apple-pay",
            isActive: true,
        }],
        destination: {
            origin: "Huston",
            originAddress: "729 Street",
            destination: "Jacinto City",
            destinationAddress: "10921-10919 Wiggins St"
        },
        travelInfo: {
            distance: 17.6,
            time: 18,
            price: 28.5,
            energy: 10.8
        },
        hiddenTravelInfo: false
    },
    {
        passengerInfo: {
            profileImage: "assets/images/profile3.jpg",
            completeName: "Emily Mills",
            interactions: 24,
            email: "emilymills88@gmail.com",
            phone: "+200-8947-2457",
            location: "Bangor, Maine"
        },
        paymentMethods: [{
            name: "paypal",
            iconClass: "fab fa-cc-paypal",
            isActive: false,
        },
        {
            name: "visa",
            iconClass: "fab fa-cc-visa",
            isActive: false,
        },
        {
            name: "mastercard",
            iconClass: "fab fa-cc-mastercard",
            isActive: true,
        },
        {
            name: "applePay",
            iconClass: "fab fa-cc-apple-pay",
            isActive: false,
        }],
        destination: {
            origin: "Bangor",
            originAddress: "157-199 5th Street",
            destination: "Ellsworth",
            destinationAddress: "5-19 Carlisle St",
        },
        travelInfo: {
            distance: 45,
            time: 36,
            price: 38.4,
            energy: 16.5
        },
        hiddenTravelInfo: false
    },
];
