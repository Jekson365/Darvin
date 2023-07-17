
export type Lecture = {
    title: string;
    author: string;
    price: number;
    description: string;
    videoAmount: number;
    img: string;
    stars: number;
    id: Number,
    totalMeet: Number,
    duration: Number,
    week: string[],
    learningPlan: string[]
};

export type Lecturer = {
    name: string,
    id: number,
    surname: string,
    subject: string[],
    desc: string,
    price: Number,
    stars: number,
    certificate: string[],
    descLong: string,
    img: string,
    education: string[],
    socialMedia: string[],
    experience: string[],
    rooms: Lecture[],
}


export const Lects: Lecturer[] = [
    {
        name: "როსტომ",
        id: 1,
        surname: "ჭკუასელი",
        education: ["ბიზნესისა და ტექნლოგიების უნივერსიტეტი", "კვალითის სახელმწიფო უნივერსიტეტი"],
        certificate: ["ჭოკით ხტომა", "ჭიდაობა"],
        subject: ["მათემატიკა", "ქართული", "ინგლისური"],
        desc: "მასწავლებელი 20 წლიანი სამუშაო გამოცდილებით მოსწავლეებთან",
        experience: ['პროფესიონალი ჭოკით მხტომელი', "ჟეშტიანშიკი", "გლდანულის ლომი"],
        price: 100,

        rooms: [
            {
                totalMeet: 12,
                duration: 8,
                week: [
                    "ხატვა-წერას",
                    "მეგას პროგრამას",
                    "პროგრამირებას",
                    "სალარო აპარატების დაყენეას",
                    "სალარო აპარატების დაყენეას",
                    "სალარო აპარატების დაყენეას",
                    "სალარო აპარატების დაყენეას",

                ],
                author: "გოგა საური",
                id: 1,
                title: "რენდომ სახელი",
                price: 125,
                learningPlan: [
                    "ხატვა-წერას",
                    "მეგას პროგრამას",
                    "პროგრამირებას",
                    "სალარო აპარატების დაყენეას",
                ],
                description:
                    "სატესტო აღწერა განკუთვნილია იმისათვის რომ ნაწერი ჩანდეს ბუნებრივი და დეველოპერს შეეძლოს მისი აღქმა სატესტო აღწერა განკუთვნილია იმისათვის რომ ნაწერი ჩანდეს ბუნებრივი და დეველოპერს შეეძლოს მისი აღქმა",
                videoAmount: 10,
                img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                stars: Math.floor(Math.random() * 5),
            },
            {
                totalMeet: 12,
                duration: 8,
                week: [
                    "ხატვა-წერას",
                    "მეგას პროგრამას",
                    "პროგრამირებას",
                    "სალარო აპარატების დაყენეას"
                ],
                author: "გოგა საური",
                id: 1,
                title: "პროგრამირება",
                price: 125,
                learningPlan: [
                    "ხატვა-წერას",
                    "მეგას პროგრამას",
                    "პროგრამირებას",
                    "სალარო აპარატების დაყენეას",
                ],
                description:
                    "სატესტო აღწერა განკუთვნილია იმისათვის რომ ნაწერი ჩანდეს ბუნებრივი და დეველოპერს შეეძლოს მისი აღქმა სატესტო აღწერა განკუთვნილია იმისათვის რომ ნაწერი ჩანდეს ბუნებრივი და დეველოპერს შეეძლოს მისი აღქმა",
                videoAmount: 10,
                img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                stars: Math.floor(Math.random() * 5),
            },
            {
                totalMeet: 12,
                duration: 8,
                week: [
                    "ხატვა-წერას",
                    "მეგას პროგრამას",
                    "პროგრამირებას",
                    "სალარო აპარატების დაყენეას"
                ],
                author: "გოგა საური",
                id: 1,
                title: "მათემატიკა",
                price: 125,
                learningPlan: [
                    "ხატვა-წერას",
                    "მეგას პროგრამას",
                    "პროგრამირებას",
                    "სალარო აპარატების დაყენეას",
                ],
                description:
                    "სატესტო აღწერა განკუთვნილია იმისათვის რომ ნაწერი ჩანდეს ბუნებრივი და დეველოპერს შეეძლოს მისი აღქმა სატესტო აღწერა განკუთვნილია იმისათვის რომ ნაწერი ჩანდეს ბუნებრივი და დეველოპერს შეეძლოს მისი აღქმა",
                videoAmount: 10,
                img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                stars: Math.floor(Math.random() * 5),
            },

        ],

        descLong: "",
        stars: 1,
        img: "https://images.pexels.com/photos/6325949/pexels-photo-6325949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        socialMedia: ['facebook.com', 'twitter.com', 'instagram.com']
    },
    {
        name: "გუგა",
        id: 2,
        surname: "კაკულია",
        education: ["ბიზნესისა და ტექნლოგიების უნივერსიტეტი", "კვალითის სახელმწიფო უნივერსიტეტი"],
        certificate: ["ჭოკით ხტომა", "სპარინგი"],
        subject: ["მათემატიკა", "ქართული"],
        desc: "მასწავლებელი 20 წლიანი სამუშაო გამოცდილებით მოსწავლეებთან",
        experience: ['პროფესიონალი ჭოკით მხტომელი', "ჟეშტიანშიკი", "გლდანულის ლომი"],
        price: 100,
        rooms: [
            {
                totalMeet: 12,
                duration: 8,
                week: [
                    "ხატვა-წერას",
                    "მეგას პროგრამას",
                    "პროგრამირებას",
                    "სალარო აპარატების დაყენეას"
                ],
                id: 2,
                author: "გოგა საური",
                title: "ქართული",
                price: 125,
                learningPlan: [
                    "ხატვა-წერას",
                    "მეგას პროგრამას",
                    "პროგრამირებას",
                    "სალარო აპარატების დაყენეას",
                ],
                description:
                    "სატესტო აღწერა განკუთვნილია იმისათვის რომ ნაწერი ჩანდეს ბუნებრივი და დეველოპერს შეეძლოს მისი აღქმა სატესტო აღწერა განკუთვნილია იმისათვის რომ ნაწერი ჩანდეს ბუნებრივი და დეველოპერს შეეძლოს მისი აღქმა",
                videoAmount: 10,
                img: "https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                stars: Math.floor(Math.random() * 5),
            },
            {
                totalMeet: 12,
                duration: 8,
                week: [
                    "ხატვა-წერას",
                    "მეგას პროგრამას",
                    "პროგრამირებას",
                    "სალარო აპარატების დაყენეას"
                ],
                id: 2,
                author: "გოგა საური",
                title: "მაგარი კურსი",
                price: 125,
                learningPlan: [
                    "ხატვა-წერას",
                    "მეგას პროგრამას",
                    "პროგრამირებას",
                    "სალარო აპარატების დაყენეას",
                ],
                description:
                    "სატესტო აღწერა განკუთვნილია იმისათვის რომ ნაწერი ჩანდეს ბუნებრივი და დეველოპერს შეეძლოს მისი აღქმა სატესტო აღწერა განკუთვნილია იმისათვის რომ ნაწერი ჩანდეს ბუნებრივი და დეველოპერს შეეძლოს მისი აღქმა",
                videoAmount: 10,
                img: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                stars: Math.floor(Math.random() * 5),
            },
        ],
        descLong: "",
        stars: 1,
        img: "https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=1600",
        socialMedia: ['facebook.com']
    },
    {
        name: "გიორგი",
        id: 3,
        surname: "გრიგოლაშვილი",
        education: ["ბიზნესისა და ტექნლოგიების უნივერსიტეტი", "კვალითის სახელმწიფო უნივერსიტეტი"],
        certificate: ["ჭოკით ხტომა", "მეგას საპორტი"],
        subject: ["მათემატიკა", "ქართული", "ინგლისური"],
        desc: "მასწავლებელი 20 წლიანი სამუშაო გამოცდილებით მოსწავლეებთან",
        experience: ['პროფესიონალი ჭოკით მხტომელი', "ჟეშტიანშიკი", "გლდანულის ლომი"],
        price: 100,
        rooms: [
            {
                totalMeet: 12,
                duration: 8,
                week: [
                    "ხატვა-წერას",
                    "მეგას პროგრამას",
                    "პროგრამირებას",
                    "სალარო აპარატების დაყენეას"
                ],
                id: 3,
                author: "გოგა საური",
                title: "მაგარი კურსი",
                price: 125,
                learningPlan: [
                    "ხატვა-წერას",
                    "მეგას პროგრამას",
                    "პროგრამირებას",
                    "სალარო აპარატების დაყენეას",
                ],
                description:
                    "სატესტო აღწერა განკუთვნილია იმისათვის რომ ნაწერი ჩანდეს ბუნებრივი და დეველოპერს შეეძლოს მისი აღქმა სატესტო აღწერა განკუთვნილია იმისათვის რომ ნაწერი ჩანდეს ბუნებრივი და დეველოპერს შეეძლოს მისი აღქმა",
                videoAmount: 10,
                img: "https://zvuk-m.com/wp-content/uploads/2018/08/137894374.jpg",
                stars: Math.floor(Math.random() * 5),
            },
        ],
        descLong: "",
        stars: 1,
        img: "https://images.pexels.com/photos/3772712/pexels-photo-3772712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        socialMedia: ['facebook.com', 'twitter.com']
    },
    {
        name: "ლევან",
        id: 4,
        surname: "გეგელაშვილი",
        education: ["ბიზნესისა და ტექნლოგიების უნივერსიტეტი", "კვალითის სახელმწიფო უნივერსიტეტი"],
        certificate: ["ჭოკით ხტომა"],
        subject: ["მათემატიკა", "ქართული"],
        desc: "მასწავლებელი 20 წლიანი სამუშაო გამოცდილებით მოსწავლეებთან",
        experience: ['პროფესიონალი ჭოკით მხტომელი', "ჟეშტიანშიკი", "გლდანულის ლომი"],
        price: 100,
        rooms: [
            {
                totalMeet: 12,
                duration: 8,
                week: [
                    "ხატვა-წერას",
                    "მეგას პროგრამას",
                    "პროგრამირებას",
                    "სალარო აპარატების დაყენეას"
                ],
                id: 4,
                author: "გოგა საური",
                title: "მაგარი კურსი",
                price: 125,
                learningPlan: [
                    "ხატვა-წერას",
                    "მეგას პროგრამას",
                    "პროგრამირებას",
                    "სალარო აპარატების დაყენეას",
                ],
                description:
                    "სატესტო აღწერა განკუთვნილია იმისათვის რომ ნაწერი ჩანდეს ბუნებრივი და დეველოპერს შეეძლოს მისი აღქმა სატესტო აღწერა განკუთვნილია იმისათვის რომ ნაწერი ჩანდეს ბუნებრივი და დეველოპერს შეეძლოს მისი აღქმა",
                videoAmount: 10,
                img: "https://assets.website-files.com/5ec0480d4930cd200885acbd/5ec30bf4beb574713e5b84d9_Screenshot%202020-05-18%20at%2023.27.50-p-500.png",
                stars: Math.floor(Math.random() * 5),
            },
        ],
        descLong: "",
        stars: 1,
        img: "https://images.pexels.com/photos/4342401/pexels-photo-4342401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        socialMedia: ['facebook.com', 'twitter.com']
    },
    {
        name: "თამარი",
        id: 5,
        surname: "გეგელაშვილი",
        education: ["ბიზნესისა და ტექნლოგიების უნივერსიტეტი", "კვალითის სახელმწიფო უნივერსიტეტი"],
        certificate: ["ჭოკით ხტომა"],
        subject: ["მათემატიკა", "ქართული", "ინგლისური"],
        desc: "მასწავლებელი 20 წლიანი სამუშაო გამოცდილებით მოსწავლეებთან",
        experience: ['პროფესიონალი ჭოკით მხტომელი', "ჟეშტიანშიკი", "გლდანულის ლომი"],
        price: 100,
        rooms: [
            {
                totalMeet: 12,
                duration: 8,
                week: [
                    "ხატვა-წერას",
                    "მეგას პროგრამას",
                    "პროგრამირებას",
                    "სალარო აპარატების დაყენეას"
                ],
                id: 5,
                author: "გოგა საური",
                title: "მაგარი კურსი",
                price: 125,
                learningPlan: [
                    "ხატვა-წერას",
                    "მეგას პროგრამას",
                    "პროგრამირებას",
                    "სალარო აპარატების დაყენეას",
                ],
                description:
                    "სატესტო აღწერა განკუთვნილია იმისათვის რომ ნაწერი ჩანდეს ბუნებრივი და დეველოპერს შეეძლოს მისი აღქმა სატესტო აღწერა განკუთვნილია იმისათვის რომ ნაწერი ჩანდეს ბუნებრივი და დეველოპერს შეეძლოს მისი აღქმა",
                videoAmount: 10,
                img: "https://assets.website-files.com/5ec0480d4930cd200885acbd/5ec30ab3c489210852558090_Screenshot%202020-05-18%20at%2023.22.31-p-500.png",
                stars: Math.floor(Math.random() * 5),
            },
        ],
        descLong: "",
        stars: 1,
        img: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        socialMedia: ['facebook.com', 'twitter.com']
    },
    {
        name: "ნოდარი",
        id: 6,
        surname: "კაკულია",
        education: ["ბიზნესისა და ტექნლოგიების უნივერსიტეტი", "კვალითის სახელმწიფო უნივერსიტეტი"],
        certificate: ["ჭოკით ხტომა", "დამლაგებელი გეი კლუბში"],
        subject: ["მათემატიკა", "ქართული", "ინგლისური",],
        desc: "მასწავლებელი 20 წლიანი სამუშაო გამოცდილებით მოსწავლეებთან",
        experience: ['პროფესიონალი ჭოკით მხტომელი', "ჟეშტიანშიკი", "გლდანულის ლომი"],
        price: 100,
        rooms: [],
        descLong: "",
        stars: 1,
        img: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        socialMedia: ['facebook.com', 'twitter.com']
    },
    {
        name: "რამაზ",
        id: 7,
        surname: "ჩხეიძე",
        education: ["ბიზნესისა და ტექნლოგიების უნივერსიტეტი", "კვალითის სახელმწიფო უნივერსიტეტი"],
        certificate: ["ჭოკით ხტომა"],
        subject: ["მათემატიკა", "ქართული"],
        desc: "მასწავლებელი 20 წლიანი სამუშაო გამოცდილებით მოსწავლეებთან",
        experience: ['პროფესიონალი ჭოკით მხტომელი', "ჟეშტიანშიკი", "გლდანულის ლომი"],
        price: 100,
        rooms: [],
        descLong: "",
        stars: 1,
        img: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1600",
        socialMedia: ['facebook.com', 'twitter.com']
    },
    {
        name: "ნოდარი",
        id: 8,
        surname: "კაკულია",
        education: ["ბიზნესისა და ტექნლოგიების უნივერსიტეტი", "კვალითის სახელმწიფო უნივერსიტეტი"],
        certificate: ["ჭოკით ხტომა"],
        subject: ["მათემატიკა", "ქართული", "ინგლისური"],
        desc: "მასწავლებელი 20 წლიანი სამუშაო გამოცდილებით მოსწავლეებთან",
        experience: ['პროფესიონალი ჭოკით მხტომელი', "ჟეშტიანშიკი", "გლდანულის ლომი"],
        price: 100,
        rooms: [],
        descLong: "",
        stars: 1,
        img: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        socialMedia: ['facebook.com', 'twitter.com']
    },
    {
        name: "ხვიჩა",
        id: 9,
        surname: "კვარაცხელია",
        education: ["ბიზნესისა და ტექნლოგიების უნივერსიტეტი", "კვალითის სახელმწიფო უნივერსიტეტი"],
        certificate: ["ჭოკით ხტომა"],
        subject: ["მათემატიკა", "ქართული", "ინგლისური"],
        desc: "მასწავლებელი 20 წლიანი სამუშაო გამოცდილებით მოსწავლეებთან",
        experience: ['პროფესიონალი ჭოკით მხტომელი', "ჟეშტიანშიკი", "გლდანულის ლომი"],
        price: 100,
        rooms: [],
        descLong: "",
        stars: 1,
        img: "https://images.pexels.com/photos/6209566/pexels-photo-6209566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        socialMedia: ['facebook.com', 'twitter.com']
    },
]