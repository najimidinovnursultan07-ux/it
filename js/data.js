const DEFAULT_TOURS = [
{id:1,title:"Жайкы эс алуу — Анталия",country:"Түркия",hotel:"Lara Family Resort",price:68500,days:7,meal:"All Inclusive",rating:"4.9",tag:"ХИТ САТУУ",image:"https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=85"},
{id:2,title:"Кызыл деңиздин жээгинде",country:"Египет",hotel:"Sunrise Aqua Resort",price:59200,days:7,meal:"All Inclusive",rating:"4.8",tag:"HOT OFFER",image:"https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=85"},
{id:3,title:"Дубай — шаардык укмуштуу окуя",country:"БАЭ",hotel:"Marina View Hotel",price:74800,days:5,meal:"Breakfast",rating:"4.9",tag:"POPULAR",image:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=85"},
{id:4,title:"Тропикалык бейиш — Пхукет",country:"Таиланд",hotel:"The Palm Beach",price:89500,days:9,meal:"Breakfast",rating:"4.7",tag:"NEW",image:"https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=900&q=85"},
{id:5,title:"Мальдив аралдарында эс алуу",country:"Мальдив",hotel:"Ocean Pearl Resort",price:148000,days:6,meal:"Full Board",rating:"5.0",tag:"PREMIUM",image:"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=85"},
{id:6,title:"Вьетнам — жаңы ачылыштар",country:"Вьетнам",hotel:"Seaside Boutique",price:79900,days:8,meal:"Breakfast",rating:"4.8",tag:"ЭРТЕ БРОНДОО",image:"https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=85"}
];
function getTours(){try{return JSON.parse(localStorage.getItem("travelTours"))||DEFAULT_TOURS}catch(e){return DEFAULT_TOURS}}
function saveTours(tours){localStorage.setItem("travelTours",JSON.stringify(tours))}
