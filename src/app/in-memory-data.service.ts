import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Location } from './openmrs/model/location';
import { Observable, of } from 'rxjs';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const locations = [
        { 
            id: 11,
            uuid: '11', 
            name: 'Nigeria Primary Healthcare Board', 
            parent: null, 
            address: 'No 10 Kufekufe Street, Area 12, Abuja', 
            locale: 'Area 12', 
            state: 'Abuja'
        }
    ];
    const states = [
      {
        "name": "Abia State",
        "uuid": 1,
        "locals": [
          {
            "name": "Aba South",
            "uuid": 1
          },
          {
            "name": "Arochukwu",
            "uuid": 2
          },
          {
            "name": "Bende",
            "uuid": 3
          },
          {
            "name": "Ikwuano",
            "uuid": 4
          },
          {
            "name": "Isiala Ngwa North",
            "uuid": 5
          },
          {
            "name": "Isiala Ngwa South",
            "uuid": 6
          },
          {
            "name": "Isuikwuato",
            "uuid": 7
          },
          {
            "name": "Obi Ngwa",
            "uuid": 8
          },
          {
            "name": "Ohafia",
            "uuid": 9
          },
          {
            "name": "Osisioma",
            "uuid": 10
          },
          {
            "name": "Ugwunagbo",
            "uuid": 11
          },
          {
            "name": "Ukwa East",
            "uuid": 12
          },
          {
            "name": "Ukwa West",
            "uuid": 13
          },
          {
            "name": "Umuahia North",
            "uuid": 14
          },
          {
            "name": "Umuahia South",
            "uuid": 15
          },
          {
            "name": "Umu Nneochi",
            "uuid": 16
          }
        ]
      },
      {
        "name": "Adamawa State",
        "uuid": 2,
        "locals": [
          {
            "name": "Fufure",
            "uuid": 1
          },
          {
            "name": "Ganye",
            "uuid": 2
          },
          {
            "name": "Gayuk",
            "uuid": 3
          },
          {
            "name": "Gombi",
            "uuid": 4
          },
          {
            "name": "Grie",
            "uuid": 5
          },
          {
            "name": "Hong",
            "uuid": 6
          },
          {
            "name": "Jada",
            "uuid": 7
          },
          {
            "name": "Lamurde",
            "uuid": 8
          },
          {
            "name": "Madagali",
            "uuid": 9
          },
          {
            "name": "Maiha",
            "uuid": 10
          },
          {
            "name": "Mayo Belwa",
            "uuid": 11
          },
          {
            "name": "Michika",
            "uuid": 12
          },
          {
            "name": "Mubi North",
            "uuid": 13
          },
          {
            "name": "Mubi South",
            "uuid": 14
          },
          {
            "name": "Numan",
            "uuid": 15
          },
          {
            "name": "Shelleng",
            "uuid": 16
          },
          {
            "name": "Song",
            "uuid": 17
          },
          {
            "name": "Toungo",
            "uuid": 18
          },
          {
            "name": "Yola North",
            "uuid": 19
          },
          {
            "name": "Yola South",
            "uuid": 20
          }
        ]
      },
      {
        "name": "Akwa Ibom State",
        "uuid": 3,
        "locals": [
          {
            "name": "Eastern Obolo",
            "uuid": 1
          },
          {
            "name": "Eket",
            "uuid": 2
          },
          {
            "name": "Esit Eket",
            "uuid": 3
          },
          {
            "name": "Essien Udim",
            "uuid": 4
          },
          {
            "name": "Etim Ekpo",
            "uuid": 5
          },
          {
            "name": "Etinan",
            "uuid": 6
          },
          {
            "name": "Ibeno",
            "uuid": 7
          },
          {
            "name": "Ibesikpo Asutan",
            "uuid": 8
          },
          {
            "name": "Ibiono-Ibom",
            "uuid": 9
          },
          {
            "name": "Ika",
            "uuid": 10
          },
          {
            "name": "Ikono",
            "uuid": 11
          },
          {
            "name": "Ikot Abasi",
            "uuid": 12
          },
          {
            "name": "Ikot Ekpene",
            "uuid": 13
          },
          {
            "name": "Ini",
            "uuid": 14
          },
          {
            "name": "Itu",
            "uuid": 15
          },
          {
            "name": "Mbo",
            "uuid": 16
          },
          {
            "name": "Mkpat-Enin",
            "uuid": 17
          },
          {
            "name": "Nsit-Atai",
            "uuid": 18
          },
          {
            "name": "Nsit-Ibom",
            "uuid": 19
          },
          {
            "name": "Nsit-Ubium",
            "uuid": 20
          },
          {
            "name": "Obot Akara",
            "uuid": 21
          },
          {
            "name": "Okobo",
            "uuid": 22
          },
          {
            "name": "Onna",
            "uuid": 23
          },
          {
            "name": "Oron",
            "uuid": 24
          },
          {
            "name": "Oruk Anam",
            "uuid": 25
          },
          {
            "name": "Udung-Uko",
            "uuid": 26
          },
          {
            "name": "Ukanafun",
            "uuid": 27
          },
          {
            "name": "Uruan",
            "uuid": 28
          },
          {
            "name": "Urue-Offong/Oruko",
            "uuid": 29
          },
          {
            "name": "Uyo",
            "uuid": 30
          }
        ]
      },
      {
        "name": "Anambra State",
        "uuid": 4,
        "locals": [
          {
            "name": "Anambra East",
            "uuid": 1
          },
          {
            "name": "Anambra West",
            "uuid": 2
          },
          {
            "name": "Anaocha",
            "uuid": 3
          },
          {
            "name": "Awka North",
            "uuid": 4
          },
          {
            "name": "Awka South",
            "uuid": 5
          },
          {
            "name": "Ayamelum",
            "uuid": 6
          },
          {
            "name": "Dunukofia",
            "uuid": 7
          },
          {
            "name": "Ekwusigo",
            "uuid": 8
          },
          {
            "name": "Idemili North",
            "uuid": 9
          },
          {
            "name": "Idemili South",
            "uuid": 10
          },
          {
            "name": "Ihiala",
            "uuid": 11
          },
          {
            "name": "Njikoka",
            "uuid": 12
          },
          {
            "name": "Nnewi North",
            "uuid": 13
          },
          {
            "name": "Nnewi South",
            "uuid": 14
          },
          {
            "name": "Ogbaru",
            "uuid": 15
          },
          {
            "name": "Onitsha North",
            "uuid": 16
          },
          {
            "name": "Onitsha South",
            "uuid": 17
          },
          {
            "name": "Orumba North",
            "uuid": 18
          },
          {
            "name": "Orumba South",
            "uuid": 19
          },
          {
            "name": "Oyi",
            "uuid": 20
          }
        ]
      },
      {
        "name": "Bauchi State",
        "uuid": 5,
        "locals": [
          {
            "name": "Bauchi",
            "uuid": 1
          },
          {
            "name": "Bogoro",
            "uuid": 2
          },
          {
            "name": "Damban",
            "uuid": 3
          },
          {
            "name": "Darazo",
            "uuid": 4
          },
          {
            "name": "Dass",
            "uuid": 5
          },
          {
            "name": "Gamawa",
            "uuid": 6
          },
          {
            "name": "Ganjuwa",
            "uuid": 7
          },
          {
            "name": "Giade",
            "uuid": 8
          },
          {
            "name": "Itas/Gadau",
            "uuid": 9
          },
          {
            "name": "Jama'are",
            "uuid": 10
          },
          {
            "name": "Katagum",
            "uuid": 11
          },
          {
            "name": "Kirfi",
            "uuid": 12
          },
          {
            "name": "Misau",
            "uuid": 13
          },
          {
            "name": "Ningi",
            "uuid": 14
          },
          {
            "name": "Shira",
            "uuid": 15
          },
          {
            "name": "Tafawa Balewa",
            "uuid": 16
          },
          {
            "name": "Toro",
            "uuid": 17
          },
          {
            "name": "Warji",
            "uuid": 18
          },
          {
            "name": "Zaki",
            "uuid": 19
          }
        ]
      },
      {
        "name": "Bayelsa State",
        "uuid": 6,
        "locals": [
          {
            "name": "Ekeremor",
            "uuid": 1
          },
          {
            "name": "Kolokuma/Opokuma",
            "uuid": 2
          },
          {
            "name": "Nembe",
            "uuid": 3
          },
          {
            "name": "Ogbia",
            "uuid": 4
          },
          {
            "name": "Sagbama",
            "uuid": 5
          },
          {
            "name": "Southern Ijaw",
            "uuid": 6
          },
          {
            "name": "Yenagoa",
            "uuid": 7
          }
        ]
      },
      {
        "name": "Benue State",
        "uuid": 7,
        "locals": [
          {
            "name": "Apa",
            "uuid": 1
          },
          {
            "name": "Ado",
            "uuid": 2
          },
          {
            "name": "Buruku",
            "uuid": 3
          },
          {
            "name": "Gboko",
            "uuid": 4
          },
          {
            "name": "Guma",
            "uuid": 5
          },
          {
            "name": "Gwer East",
            "uuid": 6
          },
          {
            "name": "Gwer West",
            "uuid": 7
          },
          {
            "name": "Katsina-Ala",
            "uuid": 8
          },
          {
            "name": "Konshisha",
            "uuid": 9
          },
          {
            "name": "Kwande",
            "uuid": 10
          },
          {
            "name": "Logo",
            "uuid": 11
          },
          {
            "name": "Makurdi",
            "uuid": 12
          },
          {
            "name": "Obi",
            "uuid": 13
          },
          {
            "name": "Ogbadibo",
            "uuid": 14
          },
          {
            "name": "Ohimini",
            "uuid": 15
          },
          {
            "name": "Oju",
            "uuid": 16
          },
          {
            "name": "Okpokwu",
            "uuid": 17
          },
          {
            "name": "Oturkpo",
            "uuid": 18
          },
          {
            "name": "Tarka",
            "uuid": 19
          },
          {
            "name": "Ukum",
            "uuid": 20
          },
          {
            "name": "Ushongo",
            "uuid": 21
          },
          {
            "name": "Vandeikya",
            "uuid": 22
          }
        ]
      },
      {
        "name": "Borno State",
        "uuid": 8,
        "locals": [
          {
            "name": "Askira/Uba",
            "uuid": 1
          },
          {
            "name": "Bama",
            "uuid": 2
          },
          {
            "name": "Bayo",
            "uuid": 3
          },
          {
            "name": "Biu",
            "uuid": 4
          },
          {
            "name": "Chibok",
            "uuid": 5
          },
          {
            "name": "Damboa",
            "uuid": 6
          },
          {
            "name": "Dikwa",
            "uuid": 7
          },
          {
            "name": "Gubio",
            "uuid": 8
          },
          {
            "name": "Guzamala",
            "uuid": 9
          },
          {
            "name": "Gwoza",
            "uuid": 10
          },
          {
            "name": "Hawul",
            "uuid": 11
          },
          {
            "name": "Jere",
            "uuid": 12
          },
          {
            "name": "Kaga",
            "uuid": 13
          },
          {
            "name": "Kala/Balge",
            "uuid": 14
          },
          {
            "name": "Konduga",
            "uuid": 15
          },
          {
            "name": "Kukawa",
            "uuid": 16
          },
          {
            "name": "Kwaya Kusar",
            "uuid": 17
          },
          {
            "name": "Mafa",
            "uuid": 18
          },
          {
            "name": "Magumeri",
            "uuid": 19
          },
          {
            "name": "Maiduguri",
            "uuid": 20
          },
          {
            "name": "Marte",
            "uuid": 21
          },
          {
            "name": "Mobbar",
            "uuid": 22
          },
          {
            "name": "Monguno",
            "uuid": 23
          },
          {
            "name": "Ngala",
            "uuid": 24
          },
          {
            "name": "Nganzai",
            "uuid": 25
          },
          {
            "name": "Shani",
            "uuid": 26
          }
        ]
      },
      {
        "name": "Cross River State",
        "uuid": 9,
        "locals": [
          {
            "name": "Akamkpa",
            "uuid": 1
          },
          {
            "name": "Akpabuyo",
            "uuid": 2
          },
          {
            "name": "Bakassi",
            "uuid": 3
          },
          {
            "name": "Bekwarra",
            "uuid": 4
          },
          {
            "name": "Biase",
            "uuid": 5
          },
          {
            "name": "Boki",
            "uuid": 6
          },
          {
            "name": "Calabar Municipal",
            "uuid": 7
          },
          {
            "name": "Calabar South",
            "uuid": 8
          },
          {
            "name": "Etung",
            "uuid": 9
          },
          {
            "name": "Ikom",
            "uuid": 10
          },
          {
            "name": "Obanliku",
            "uuid": 11
          },
          {
            "name": "Obubra",
            "uuid": 12
          },
          {
            "name": "Obudu",
            "uuid": 13
          },
          {
            "name": "Odukpani",
            "uuid": 14
          },
          {
            "name": "Ogoja",
            "uuid": 15
          },
          {
            "name": "Yakuur",
            "uuid": 16
          },
          {
            "name": "Yala",
            "uuid": 17
          }
        ]
      },
      {
        "name": "Delta State",
        "uuid": 10,
        "locals": [
          {
            "name": "Aniocha South",
            "uuid": 1
          },
          {
            "name": "Bomadi",
            "uuid": 2
          },
          {
            "name": "Burutu",
            "uuid": 3
          },
          {
            "name": "Ethiope East",
            "uuid": 4
          },
          {
            "name": "Ethiope West",
            "uuid": 5
          },
          {
            "name": "Ika North East",
            "uuid": 6
          },
          {
            "name": "Ika South",
            "uuid": 7
          },
          {
            "name": "Isoko North",
            "uuid": 8
          },
          {
            "name": "Isoko South",
            "uuid": 9
          },
          {
            "name": "Ndokwa East",
            "uuid": 10
          },
          {
            "name": "Ndokwa West",
            "uuid": 11
          },
          {
            "name": "Okpe",
            "uuid": 12
          },
          {
            "name": "Oshimili North",
            "uuid": 13
          },
          {
            "name": "Oshimili South",
            "uuid": 14
          },
          {
            "name": "Patani",
            "uuid": 15
          },
          {
            "name": "Sapele",
            "uuid": 16
          },
          {
            "name": "Udu",
            "uuid": 17
          },
          {
            "name": "Ughelli North",
            "uuid": 18
          },
          {
            "name": "Ughelli South",
            "uuid": 19
          },
          {
            "name": "Ukwuani",
            "uuid": 20
          },
          {
            "name": "Uvwie",
            "uuid": 21
          },
          {
            "name": "Warri North",
            "uuid": 22
          },
          {
            "name": "Warri South",
            "uuid": 23
          },
          {
            "name": "Warri South West",
            "uuid": 24
          }
        ]
      },
      {
        "name": "Ebonyi State",
        "uuid": 11,
        "locals": [
          {
            "name": "Afikpo North",
            "uuid": 1
          },
          {
            "name": "Afikpo South",
            "uuid": 2
          },
          {
            "name": "Ebonyi",
            "uuid": 3
          },
          {
            "name": "Ezza North",
            "uuid": 4
          },
          {
            "name": "Ezza South",
            "uuid": 5
          },
          {
            "name": "Ikwo",
            "uuid": 6
          },
          {
            "name": "Ishielu",
            "uuid": 7
          },
          {
            "name": "Ivo",
            "uuid": 8
          },
          {
            "name": "Izzi",
            "uuid": 9
          },
          {
            "name": "Ohaozara",
            "uuid": 10
          },
          {
            "name": "Ohaukwu",
            "uuid": 11
          },
          {
            "name": "Onicha",
            "uuid": 12
          }
        ]
      },
      {
        "name": "Edo State",
        "uuid": 12,
        "locals": [
          {
            "name": "Egor",
            "uuid": 1
          },
          {
            "name": "Esan Central",
            "uuid": 2
          },
          {
            "name": "Esan North-East",
            "uuid": 3
          },
          {
            "name": "Esan South-East",
            "uuid": 4
          },
          {
            "name": "Esan West",
            "uuid": 5
          },
          {
            "name": "Etsako Central",
            "uuid": 6
          },
          {
            "name": "Etsako East",
            "uuid": 7
          },
          {
            "name": "Etsako West",
            "uuid": 8
          },
          {
            "name": "Igueben",
            "uuid": 9
          },
          {
            "name": "Ikpoba Okha",
            "uuid": 10
          },
          {
            "name": "Orhionmwon",
            "uuid": 11
          },
          {
            "name": "Oredo",
            "uuid": 12
          },
          {
            "name": "Ovia North-East",
            "uuid": 13
          },
          {
            "name": "Ovia South-West",
            "uuid": 14
          },
          {
            "name": "Owan East",
            "uuid": 15
          },
          {
            "name": "Owan West",
            "uuid": 16
          },
          {
            "name": "Uhunmwonde",
            "uuid": 17
          }
        ]
      },
      {
        "name": "Ekiti State",
        "uuid": 13,
        "locals": [
          {
            "name": "Efon",
            "uuid": 1
          },
          {
            "name": "Ekiti East",
            "uuid": 2
          },
          {
            "name": "Ekiti South-West",
            "uuid": 3
          },
          {
            "name": "Ekiti West",
            "uuid": 4
          },
          {
            "name": "Emure",
            "uuid": 5
          },
          {
            "name": "Gbonyin",
            "uuid": 6
          },
          {
            "name": "Ido Osi",
            "uuid": 7
          },
          {
            "name": "Ijero",
            "uuid": 8
          },
          {
            "name": "Ikere",
            "uuid": 9
          },
          {
            "name": "Ikole",
            "uuid": 10
          },
          {
            "name": "Ilejemeje",
            "uuid": 11
          },
          {
            "name": "Irepodun/Ifelodun",
            "uuid": 12
          },
          {
            "name": "Ise/Orun",
            "uuid": 13
          },
          {
            "name": "Moba",
            "uuid": 14
          },
          {
            "name": "Oye",
            "uuid": 15
          }
        ]
      },
      {
        "name": "Enugu State",
        "uuid": 14,
        "locals": [
          {
            "name": "Awgu",
            "uuid": 1
          },
          {
            "name": "Enugu East",
            "uuid": 2
          },
          {
            "name": "Enugu North",
            "uuid": 3
          },
          {
            "name": "Enugu South",
            "uuid": 4
          },
          {
            "name": "Ezeagu",
            "uuid": 5
          },
          {
            "name": "Igbo Etiti",
            "uuid": 6
          },
          {
            "name": "Igbo Eze North",
            "uuid": 7
          },
          {
            "name": "Igbo Eze South",
            "uuid": 8
          },
          {
            "name": "Isi Uzo",
            "uuid": 9
          },
          {
            "name": "Nkanu East",
            "uuid": 10
          },
          {
            "name": "Nkanu West",
            "uuid": 11
          },
          {
            "name": "Nsukka",
            "uuid": 12
          },
          {
            "name": "Oji River",
            "uuid": 13
          },
          {
            "name": "Udenu",
            "uuid": 14
          },
          {
            "name": "Udi",
            "uuid": 15
          },
          {
            "name": "Uzo Uwani",
            "uuid": 16
          }
        ]
      },
      {
        "name": "FCT",
        "uuid": 15,
        "locals": [
          {
            "name": "Bwari",
            "uuid": 1
          },
          {
            "name": "Gwagwalada",
            "uuid": 2
          },
          {
            "name": "Kuje",
            "uuid": 3
          },
          {
            "name": "Kwali",
            "uuid": 4
          },
          {
            "name": "Municipal Area Council",
            "uuid": 5
          }
        ]
      },
      {
        "name": "Gombe State",
        "uuid": 16,
        "locals": [
          {
            "name": "Balanga",
            "uuid": 1
          },
          {
            "name": "Billiri",
            "uuid": 2
          },
          {
            "name": "Dukku",
            "uuid": 3
          },
          {
            "name": "Funakaye",
            "uuid": 4
          },
          {
            "name": "Gombe",
            "uuid": 5
          },
          {
            "name": "Kaltungo",
            "uuid": 6
          },
          {
            "name": "Kwami",
            "uuid": 7
          },
          {
            "name": "Nafada",
            "uuid": 8
          },
          {
            "name": "Shongom",
            "uuid": 9
          },
          {
            "name": "Yamaltu/Deba",
            "uuid": 10
          }
        ]
      },
      {
        "name": "Imo State",
        "uuid": 17,
        "locals": [
          {
            "name": "Ahiazu Mbaise",
            "uuid": 1
          },
          {
            "name": "Ehime Mbano",
            "uuid": 2
          },
          {
            "name": "Ezinihitte",
            "uuid": 3
          },
          {
            "name": "Ideato North",
            "uuid": 4
          },
          {
            "name": "Ideato South",
            "uuid": 5
          },
          {
            "name": "Ihitte/Uboma",
            "uuid": 6
          },
          {
            "name": "Ikeduru",
            "uuid": 7
          },
          {
            "name": "Isiala Mbano",
            "uuid": 8
          },
          {
            "name": "Isu",
            "uuid": 9
          },
          {
            "name": "Mbaitoli",
            "uuid": 10
          },
          {
            "name": "Ngor Okpala",
            "uuid": 11
          },
          {
            "name": "Njaba",
            "uuid": 12
          },
          {
            "name": "Nkwerre",
            "uuid": 13
          },
          {
            "name": "Nwangele",
            "uuid": 14
          },
          {
            "name": "Obowo",
            "uuid": 15
          },
          {
            "name": "Oguta",
            "uuid": 16
          },
          {
            "name": "Ohaji/Egbema",
            "uuid": 17
          },
          {
            "name": "Okigwe",
            "uuid": 18
          },
          {
            "name": "Orlu",
            "uuid": 19
          },
          {
            "name": "Orsu",
            "uuid": 20
          },
          {
            "name": "Oru East",
            "uuid": 21
          },
          {
            "name": "Oru West",
            "uuid": 22
          },
          {
            "name": "Owerri Municipal",
            "uuid": 23
          },
          {
            "name": "Owerri North",
            "uuid": 24
          },
          {
            "name": "Owerri West",
            "uuid": 25
          },
          {
            "name": "Unuimo",
            "uuid": 26
          }
        ]
      },
      {
        "name": "Jigawa State",
        "uuid": 18,
        "locals": [
          {
            "name": "Babura",
            "uuid": 1
          },
          {
            "name": "Biriniwa",
            "uuid": 2
          },
          {
            "name": "Birnin Kudu",
            "uuid": 3
          },
          {
            "name": "Buji",
            "uuid": 4
          },
          {
            "name": "Dutse",
            "uuid": 5
          },
          {
            "name": "Gagarawa",
            "uuid": 6
          },
          {
            "name": "Garki",
            "uuid": 7
          },
          {
            "name": "Gumel",
            "uuid": 8
          },
          {
            "name": "Guri",
            "uuid": 9
          },
          {
            "name": "Gwaram",
            "uuid": 10
          },
          {
            "name": "Gwiwa",
            "uuid": 11
          },
          {
            "name": "Hadejia",
            "uuid": 12
          },
          {
            "name": "Jahun",
            "uuid": 13
          },
          {
            "name": "Kafin Hausa",
            "uuid": 14
          },
          {
            "name": "Kazaure",
            "uuid": 15
          },
          {
            "name": "Kiri Kasama",
            "uuid": 16
          },
          {
            "name": "Kiyawa",
            "uuid": 17
          },
          {
            "name": "Kaugama",
            "uuid": 18
          },
          {
            "name": "Maigatari",
            "uuid": 19
          },
          {
            "name": "Malam Madori",
            "uuid": 20
          },
          {
            "name": "Miga",
            "uuid": 21
          },
          {
            "name": "Ringim",
            "uuid": 22
          },
          {
            "name": "Roni",
            "uuid": 23
          },
          {
            "name": "Sule Tankarkar",
            "uuid": 24
          },
          {
            "name": "Taura",
            "uuid": 25
          },
          {
            "name": "Yankwashi",
            "uuid": 26
          }
        ]
      },
      {
        "name": "Kaduna State",
        "uuid": 19,
        "locals": [
          {
            "name": "Chikun",
            "uuid": 1
          },
          {
            "name": "Giwa",
            "uuid": 2
          },
          {
            "name": "Igabi",
            "uuid": 3
          },
          {
            "name": "Ikara",
            "uuid": 4
          },
          {
            "name": "Jaba",
            "uuid": 5
          },
          {
            "name": "Jema'a",
            "uuid": 6
          },
          {
            "name": "Kachia",
            "uuid": 7
          },
          {
            "name": "Kaduna North",
            "uuid": 8
          },
          {
            "name": "Kaduna South",
            "uuid": 9
          },
          {
            "name": "Kagarko",
            "uuid": 10
          },
          {
            "name": "Kajuru",
            "uuid": 11
          },
          {
            "name": "Kaura",
            "uuid": 12
          },
          {
            "name": "Kauru",
            "uuid": 13
          },
          {
            "name": "Kubau",
            "uuid": 14
          },
          {
            "name": "Kudan",
            "uuid": 15
          },
          {
            "name": "Lere",
            "uuid": 16
          },
          {
            "name": "Makarfi",
            "uuid": 17
          },
          {
            "name": "Sabon Gari",
            "uuid": 18
          },
          {
            "name": "Sanga",
            "uuid": 19
          },
          {
            "name": "Soba",
            "uuid": 20
          },
          {
            "name": "Zangon Kataf",
            "uuid": 21
          },
          {
            "name": "Zaria",
            "uuid": 22
          }
        ]
      },
      {
        "name": "Kano State",
        "uuid": 20,
        "locals": [
          {
            "name": "Albasu",
            "uuid": 1
          },
          {
            "name": "Bagwai",
            "uuid": 2
          },
          {
            "name": "Bebeji",
            "uuid": 3
          },
          {
            "name": "Bichi",
            "uuid": 4
          },
          {
            "name": "Bunkure",
            "uuid": 5
          },
          {
            "name": "Dala",
            "uuid": 6
          },
          {
            "name": "Dambatta",
            "uuid": 7
          },
          {
            "name": "Dawakin Kudu",
            "uuid": 8
          },
          {
            "name": "Dawakin Tofa",
            "uuid": 9
          },
          {
            "name": "Doguwa",
            "uuid": 10
          },
          {
            "name": "Fagge",
            "uuid": 11
          },
          {
            "name": "Gabasawa",
            "uuid": 12
          },
          {
            "name": "Garko",
            "uuid": 13
          },
          {
            "name": "Garun Mallam",
            "uuid": 14
          },
          {
            "name": "Gaya",
            "uuid": 15
          },
          {
            "name": "Gezawa",
            "uuid": 16
          },
          {
            "name": "Gwale",
            "uuid": 17
          },
          {
            "name": "Gwarzo",
            "uuid": 18
          },
          {
            "name": "Kabo",
            "uuid": 19
          },
          {
            "name": "Kano Municipal",
            "uuid": 20
          },
          {
            "name": "Karaye",
            "uuid": 21
          },
          {
            "name": "Kibiya",
            "uuid": 22
          },
          {
            "name": "Kiru",
            "uuid": 23
          },
          {
            "name": "Kumbotso",
            "uuid": 24
          },
          {
            "name": "Kunchi",
            "uuid": 25
          },
          {
            "name": "Kura",
            "uuid": 26
          },
          {
            "name": "Madobi",
            "uuid": 27
          },
          {
            "name": "Makoda",
            "uuid": 28
          },
          {
            "name": "Minjibir",
            "uuid": 29
          },
          {
            "name": "Nasarawa",
            "uuid": 30
          },
          {
            "name": "Rano",
            "uuid": 31
          },
          {
            "name": "Rimin Gado",
            "uuid": 32
          },
          {
            "name": "Rogo",
            "uuid": 33
          },
          {
            "name": "Shanono",
            "uuid": 34
          },
          {
            "name": "Sumaila",
            "uuid": 35
          },
          {
            "name": "Takai",
            "uuid": 36
          },
          {
            "name": "Tarauni",
            "uuid": 37
          },
          {
            "name": "Tofa",
            "uuid": 38
          },
          {
            "name": "Tsanyawa",
            "uuid": 39
          },
          {
            "name": "Tudun Wada",
            "uuid": 40
          },
          {
            "name": "Ungogo",
            "uuid": 41
          },
          {
            "name": "Warawa",
            "uuid": 42
          },
          {
            "name": "Wudil",
            "uuid": 43
          }
        ]
      },
      {
        "name": "Katsina State",
        "uuid": 21,
        "locals": [
          {
            "name": "Batagarawa",
            "uuid": 1
          },
          {
            "name": "Batsari",
            "uuid": 2
          },
          {
            "name": "Baure",
            "uuid": 3
          },
          {
            "name": "Bindawa",
            "uuid": 4
          },
          {
            "name": "Charanchi",
            "uuid": 5
          },
          {
            "name": "Dandume",
            "uuid": 6
          },
          {
            "name": "Danja",
            "uuid": 7
          },
          {
            "name": "Dan Musa",
            "uuid": 8
          },
          {
            "name": "Daura",
            "uuid": 9
          },
          {
            "name": "Dutsi",
            "uuid": 10
          },
          {
            "name": "Dutsin Ma",
            "uuid": 11
          },
          {
            "name": "Faskari",
            "uuid": 12
          },
          {
            "name": "Funtua",
            "uuid": 13
          },
          {
            "name": "Ingawa",
            "uuid": 14
          },
          {
            "name": "Jibia",
            "uuid": 15
          },
          {
            "name": "Kafur",
            "uuid": 16
          },
          {
            "name": "Kaita",
            "uuid": 17
          },
          {
            "name": "Kankara",
            "uuid": 18
          },
          {
            "name": "Kankia",
            "uuid": 19
          },
          {
            "name": "Katsina",
            "uuid": 20
          },
          {
            "name": "Kurfi",
            "uuid": 21
          },
          {
            "name": "Kusada",
            "uuid": 22
          },
          {
            "name": "Mai'Adua",
            "uuid": 23
          },
          {
            "name": "Malumfashi",
            "uuid": 24
          },
          {
            "name": "Mani",
            "uuid": 25
          },
          {
            "name": "Mashi",
            "uuid": 26
          },
          {
            "name": "Matazu",
            "uuid": 27
          },
          {
            "name": "Musawa",
            "uuid": 28
          },
          {
            "name": "Rimi",
            "uuid": 29
          },
          {
            "name": "Sabuwa",
            "uuid": 30
          },
          {
            "name": "Safana",
            "uuid": 31
          },
          {
            "name": "Sandamu",
            "uuid": 32
          },
          {
            "name": "Zango",
            "uuid": 33
          }
        ]
      },
      {
        "name": "Kebbi State",
        "uuid": 22,
        "locals": [
          {
            "name": "Arewa Dandi",
            "uuid": 1
          },
          {
            "name": "Argungu",
            "uuid": 2
          },
          {
            "name": "Augie",
            "uuid": 3
          },
          {
            "name": "Bagudo",
            "uuid": 4
          },
          {
            "name": "Birnin Kebbi",
            "uuid": 5
          },
          {
            "name": "Bunza",
            "uuid": 6
          },
          {
            "name": "Dandi",
            "uuid": 7
          },
          {
            "name": "Fakai",
            "uuid": 8
          },
          {
            "name": "Gwandu",
            "uuid": 9
          },
          {
            "name": "Jega",
            "uuid": 10
          },
          {
            "name": "Kalgo",
            "uuid": 11
          },
          {
            "name": "Koko/Besse",
            "uuid": 12
          },
          {
            "name": "Maiyama",
            "uuid": 13
          },
          {
            "name": "Ngaski",
            "uuid": 14
          },
          {
            "name": "Sakaba",
            "uuid": 15
          },
          {
            "name": "Shanga",
            "uuid": 16
          },
          {
            "name": "Suru",
            "uuid": 17
          },
          {
            "name": "Wasagu/Danko",
            "uuid": 18
          },
          {
            "name": "Yauri",
            "uuid": 19
          },
          {
            "name": "Zuru",
            "uuid": 20
          }
        ]
      },
      {
        "name": "Kogi State",
        "uuid": 23,
        "locals": [
          {
            "name": "Ajaokuta",
            "uuid": 1
          },
          {
            "name": "Ankpa",
            "uuid": 2
          },
          {
            "name": "Bassa",
            "uuid": 3
          },
          {
            "name": "Dekina",
            "uuid": 4
          },
          {
            "name": "Ibaji",
            "uuid": 5
          },
          {
            "name": "Idah",
            "uuid": 6
          },
          {
            "name": "Igalamela Odolu",
            "uuid": 7
          },
          {
            "name": "Ijumu",
            "uuid": 8
          },
          {
            "name": "Kabba/Bunu",
            "uuid": 9
          },
          {
            "name": "Kogi",
            "uuid": 10
          },
          {
            "name": "Lokoja",
            "uuid": 11
          },
          {
            "name": "Mopa Muro",
            "uuid": 12
          },
          {
            "name": "Ofu",
            "uuid": 13
          },
          {
            "name": "Ogori/Magongo",
            "uuid": 14
          },
          {
            "name": "Okehi",
            "uuid": 15
          },
          {
            "name": "Okene",
            "uuid": 16
          },
          {
            "name": "Olamaboro",
            "uuid": 17
          },
          {
            "name": "Omala",
            "uuid": 18
          },
          {
            "name": "Yagba East",
            "uuid": 19
          },
          {
            "name": "Yagba West",
            "uuid": 20
          }
        ]
      },
      {
        "name": "Kwara State",
        "uuid": 24,
        "locals": [
          {
            "name": "Baruten",
            "uuid": 1
          },
          {
            "name": "Edu",
            "uuid": 2
          },
          {
            "name": "Ekiti",
            "uuid": 3
          },
          {
            "name": "Ifelodun",
            "uuid": 4
          },
          {
            "name": "Ilorin East",
            "uuid": 5
          },
          {
            "name": "Ilorin South",
            "uuid": 6
          },
          {
            "name": "Ilorin West",
            "uuid": 7
          },
          {
            "name": "Irepodun",
            "uuid": 8
          },
          {
            "name": "Isin",
            "uuid": 9
          },
          {
            "name": "Kaiama",
            "uuid": 10
          },
          {
            "name": "Moro",
            "uuid": 11
          },
          {
            "name": "Offa",
            "uuid": 12
          },
          {
            "name": "Oke Ero",
            "uuid": 13
          },
          {
            "name": "Oyun",
            "uuid": 14
          },
          {
            "name": "Pategi",
            "uuid": 15
          }
        ]
      },
      {
        "name": "Lagos State",
        "uuid": 25,
        "locals": [
          {
            "name": "Ajeromi-Ifelodun",
            "uuid": 1
          },
          {
            "name": "Alimosho",
            "uuid": 2
          },
          {
            "name": "Amuwo-Odofin",
            "uuid": 3
          },
          {
            "name": "Apapa",
            "uuid": 4
          },
          {
            "name": "Badagry",
            "uuid": 5
          },
          {
            "name": "Epe",
            "uuid": 6
          },
          {
            "name": "Eti Osa",
            "uuid": 7
          },
          {
            "name": "Ibeju-Lekki",
            "uuid": 8
          },
          {
            "name": "Ifako-Ijaiye",
            "uuid": 9
          },
          {
            "name": "Ikeja",
            "uuid": 10
          },
          {
            "name": "Ikorodu",
            "uuid": 11
          },
          {
            "name": "Kosofe",
            "uuid": 12
          },
          {
            "name": "Lagos Island",
            "uuid": 13
          },
          {
            "name": "Lagos Mainland",
            "uuid": 14
          },
          {
            "name": "Mushin",
            "uuid": 15
          },
          {
            "name": "Ojo",
            "uuid": 16
          },
          {
            "name": "Oshodi-Isolo",
            "uuid": 17
          },
          {
            "name": "Shomolu",
            "uuid": 18
          },
          {
            "name": "Surulere",
            "uuid": 19
          }
        ]
      },
      {
        "name": "Nasarawa State",
        "uuid": 26,
        "locals": [
          {
            "name": "Awe",
            "uuid": 1
          },
          {
            "name": "Doma",
            "uuid": 2
          },
          {
            "name": "Karu",
            "uuid": 3
          },
          {
            "name": "Keana",
            "uuid": 4
          },
          {
            "name": "Keffi",
            "uuid": 5
          },
          {
            "name": "Kokona",
            "uuid": 6
          },
          {
            "name": "Lafia",
            "uuid": 7
          },
          {
            "name": "Nasarawa",
            "uuid": 8
          },
          {
            "name": "Nasarawa Egon",
            "uuid": 9
          },
          {
            "name": "Obi",
            "uuid": 10
          },
          {
            "name": "Toto",
            "uuid": 11
          },
          {
            "name": "Wamba",
            "uuid": 12
          }
        ]
      },
      {
        "name": "Niger State",
        "uuid": 27,
        "locals": [
          {
            "name": "Agwara",
            "uuid": 1
          },
          {
            "name": "Bida",
            "uuid": 2
          },
          {
            "name": "Borgu",
            "uuid": 3
          },
          {
            "name": "Bosso",
            "uuid": 4
          },
          {
            "name": "Chanchaga",
            "uuid": 5
          },
          {
            "name": "Edati",
            "uuid": 6
          },
          {
            "name": "Gbako",
            "uuid": 7
          },
          {
            "name": "Gurara",
            "uuid": 8
          },
          {
            "name": "Katcha",
            "uuid": 9
          },
          {
            "name": "Kontagora",
            "uuid": 10
          },
          {
            "name": "Lapai",
            "uuid": 11
          },
          {
            "name": "Lavun",
            "uuid": 12
          },
          {
            "name": "Magama",
            "uuid": 13
          },
          {
            "name": "Mariga",
            "uuid": 14
          },
          {
            "name": "Mashegu",
            "uuid": 15
          },
          {
            "name": "Mokwa",
            "uuid": 16
          },
          {
            "name": "Moya",
            "uuid": 17
          },
          {
            "name": "Paikoro",
            "uuid": 18
          },
          {
            "name": "Rafi",
            "uuid": 19
          },
          {
            "name": "Rijau",
            "uuid": 20
          },
          {
            "name": "Shiroro",
            "uuid": 21
          },
          {
            "name": "Suleja",
            "uuid": 22
          },
          {
            "name": "Tafa",
            "uuid": 23
          },
          {
            "name": "Wushishi",
            "uuid": 24
          }
        ]
      },
      {
        "name": "Ogun State",
        "uuid": 28,
        "locals": [
          {
            "name": "Abeokuta South",
            "uuid": 1
          },
          {
            "name": "Ado-Odo/Ota",
            "uuid": 2
          },
          {
            "name": "Egbado North",
            "uuid": 3
          },
          {
            "name": "Egbado South",
            "uuid": 4
          },
          {
            "name": "Ewekoro",
            "uuid": 5
          },
          {
            "name": "Ifo",
            "uuid": 6
          },
          {
            "name": "Ijebu East",
            "uuid": 7
          },
          {
            "name": "Ijebu North",
            "uuid": 8
          },
          {
            "name": "Ijebu North East",
            "uuid": 9
          },
          {
            "name": "Ijebu Ode",
            "uuid": 10
          },
          {
            "name": "Ikenne",
            "uuid": 11
          },
          {
            "name": "Imeko Afon",
            "uuid": 12
          },
          {
            "name": "Ipokia",
            "uuid": 13
          },
          {
            "name": "Obafemi Owode",
            "uuid": 14
          },
          {
            "name": "Odeda",
            "uuid": 15
          },
          {
            "name": "Odogbolu",
            "uuid": 16
          },
          {
            "name": "Ogun Waterside",
            "uuid": 17
          },
          {
            "name": "Remo North",
            "uuid": 18
          },
          {
            "name": "Shagamu",
            "uuid": 19
          }
        ]
      },
      {
        "name": "Ondo State",
        "uuid": 29,
        "locals": [
          {
            "name": "Akoko North-West",
            "uuid": 1
          },
          {
            "name": "Akoko South-West",
            "uuid": 2
          },
          {
            "name": "Akoko South-East",
            "uuid": 3
          },
          {
            "name": "Akure North",
            "uuid": 4
          },
          {
            "name": "Akure South",
            "uuid": 5
          },
          {
            "name": "Ese Odo",
            "uuid": 6
          },
          {
            "name": "Idanre",
            "uuid": 7
          },
          {
            "name": "Ifedore",
            "uuid": 8
          },
          {
            "name": "Ilaje",
            "uuid": 9
          },
          {
            "name": "Ile Oluji/Okeigbo",
            "uuid": 10
          },
          {
            "name": "Irele",
            "uuid": 11
          },
          {
            "name": "Odigbo",
            "uuid": 12
          },
          {
            "name": "Okitipupa",
            "uuid": 13
          },
          {
            "name": "Ondo East",
            "uuid": 14
          },
          {
            "name": "Ondo West",
            "uuid": 15
          },
          {
            "name": "Ose",
            "uuid": 16
          },
          {
            "name": "Owo",
            "uuid": 17
          }
        ]
      },
      {
        "name": "Osun State",
        "uuid": 30,
        "locals": [
          {
            "name": "Atakunmosa West",
            "uuid": 1
          },
          {
            "name": "Aiyedaade",
            "uuid": 2
          },
          {
            "name": "Aiyedire",
            "uuid": 3
          },
          {
            "name": "Boluwaduro",
            "uuid": 4
          },
          {
            "name": "Boripe",
            "uuid": 5
          },
          {
            "name": "Ede North",
            "uuid": 6
          },
          {
            "name": "Ede South",
            "uuid": 7
          },
          {
            "name": "Ife Central",
            "uuid": 8
          },
          {
            "name": "Ife East",
            "uuid": 9
          },
          {
            "name": "Ife North",
            "uuid": 10
          },
          {
            "name": "Ife South",
            "uuid": 11
          },
          {
            "name": "Egbedore",
            "uuid": 12
          },
          {
            "name": "Ejigbo",
            "uuid": 13
          },
          {
            "name": "Ifedayo",
            "uuid": 14
          },
          {
            "name": "Ifelodun",
            "uuid": 15
          },
          {
            "name": "Ila",
            "uuid": 16
          },
          {
            "name": "Ilesa East",
            "uuid": 17
          },
          {
            "name": "Ilesa West",
            "uuid": 18
          },
          {
            "name": "Irepodun",
            "uuid": 19
          },
          {
            "name": "Irewole",
            "uuid": 20
          },
          {
            "name": "Isokan",
            "uuid": 21
          },
          {
            "name": "Iwo",
            "uuid": 22
          },
          {
            "name": "Obokun",
            "uuid": 23
          },
          {
            "name": "Odo Otin",
            "uuid": 24
          },
          {
            "name": "Ola Oluwa",
            "uuid": 25
          },
          {
            "name": "Olorunda",
            "uuid": 26
          },
          {
            "name": "Oriade",
            "uuid": 27
          },
          {
            "name": "Orolu",
            "uuid": 28
          },
          {
            "name": "Osogbo",
            "uuid": 29
          }
        ]
      },
      {
        "name": "Oyo State",
        "uuid": 31,
        "locals": [
          {
            "name": "Akinyele",
            "uuid": 1
          },
          {
            "name": "Atiba",
            "uuid": 2
          },
          {
            "name": "Atisbo",
            "uuid": 3
          },
          {
            "name": "Egbeda",
            "uuid": 4
          },
          {
            "name": "Ibadan North",
            "uuid": 5
          },
          {
            "name": "Ibadan North-East",
            "uuid": 6
          },
          {
            "name": "Ibadan North-West",
            "uuid": 7
          },
          {
            "name": "Ibadan South-East",
            "uuid": 8
          },
          {
            "name": "Ibadan South-West",
            "uuid": 9
          },
          {
            "name": "Ibarapa Central",
            "uuid": 10
          },
          {
            "name": "Ibarapa East",
            "uuid": 11
          },
          {
            "name": "Ibarapa North",
            "uuid": 12
          },
          {
            "name": "Ido",
            "uuid": 13
          },
          {
            "name": "Irepo",
            "uuid": 14
          },
          {
            "name": "Iseyin",
            "uuid": 15
          },
          {
            "name": "Itesiwaju",
            "uuid": 16
          },
          {
            "name": "Iwajowa",
            "uuid": 17
          },
          {
            "name": "Kajola",
            "uuid": 18
          },
          {
            "name": "Lagelu",
            "uuid": 19
          },
          {
            "name": "Ogbomosho North",
            "uuid": 20
          },
          {
            "name": "Ogbomosho South",
            "uuid": 21
          },
          {
            "name": "Ogo Oluwa",
            "uuid": 22
          },
          {
            "name": "Olorunsogo",
            "uuid": 23
          },
          {
            "name": "Oluyole",
            "uuid": 24
          },
          {
            "name": "Ona Ara",
            "uuid": 25
          },
          {
            "name": "Orelope",
            "uuid": 26
          },
          {
            "name": "Ori Ire",
            "uuid": 27
          },
          {
            "name": "Oyo",
            "uuid": 28
          },
          {
            "name": "Oyo East",
            "uuid": 29
          },
          {
            "name": "Saki East",
            "uuid": 30
          },
          {
            "name": "Saki West",
            "uuid": 31
          },
          {
            "name": "Surulere",
            "uuid": 32
          }
        ]
      },
      {
        "name": "Plateau State",
        "uuid": 32,
        "locals": [
          {
            "name": "Barkin Ladi",
            "uuid": 1
          },
          {
            "name": "Bassa",
            "uuid": 2
          },
          {
            "name": "Jos East",
            "uuid": 3
          },
          {
            "name": "Jos North",
            "uuid": 4
          },
          {
            "name": "Jos South",
            "uuid": 5
          },
          {
            "name": "Kanam",
            "uuid": 6
          },
          {
            "name": "Kanke",
            "uuid": 7
          },
          {
            "name": "Langtang South",
            "uuid": 8
          },
          {
            "name": "Langtang North",
            "uuid": 9
          },
          {
            "name": "Mangu",
            "uuid": 10
          },
          {
            "name": "Mikang",
            "uuid": 11
          },
          {
            "name": "Pankshin",
            "uuid": 12
          },
          {
            "name": "Qua'an Pan",
            "uuid": 13
          },
          {
            "name": "Riyom",
            "uuid": 14
          },
          {
            "name": "Shendam",
            "uuid": 15
          },
          {
            "name": "Wase",
            "uuid": 16
          }
        ]
      },
      {
        "name": "Rivers State",
        "uuid": 33,
        "locals": [
          {
            "name": "Ahoada East",
            "uuid": 1
          },
          {
            "name": "Ahoada West",
            "uuid": 2
          },
          {
            "name": "Akuku-Toru",
            "uuid": 3
          },
          {
            "name": "Andoni",
            "uuid": 4
          },
          {
            "name": "Asari-Toru",
            "uuid": 5
          },
          {
            "name": "Bonny",
            "uuid": 6
          },
          {
            "name": "Degema",
            "uuid": 7
          },
          {
            "name": "Eleme",
            "uuid": 8
          },
          {
            "name": "Emuoha",
            "uuid": 9
          },
          {
            "name": "Etche",
            "uuid": 10
          },
          {
            "name": "Gokana",
            "uuid": 11
          },
          {
            "name": "Ikwerre",
            "uuid": 12
          },
          {
            "name": "Khana",
            "uuid": 13
          },
          {
            "name": "Obio/Akpor",
            "uuid": 14
          },
          {
            "name": "Ogba/Egbema/Ndoni",
            "uuid": 15
          },
          {
            "name": "Ogu/Bolo",
            "uuid": 16
          },
          {
            "name": "Okrika",
            "uuid": 17
          },
          {
            "name": "Omuma",
            "uuid": 18
          },
          {
            "name": "Opobo/Nkoro",
            "uuid": 19
          },
          {
            "name": "Oyigbo",
            "uuid": 20
          },
          {
            "name": "Port Harcourt",
            "uuid": 21
          },
          {
            "name": "Tai",
            "uuid": 22
          }
        ]
      },
      {
        "name": "Sokoto State",
        "uuid": 34,
        "locals": [
          {
            "name": "Bodinga",
            "uuid": 1
          },
          {
            "name": "Dange Shuni",
            "uuid": 2
          },
          {
            "name": "Gada",
            "uuid": 3
          },
          {
            "name": "Goronyo",
            "uuid": 4
          },
          {
            "name": "Gudu",
            "uuid": 5
          },
          {
            "name": "Gwadabawa",
            "uuid": 6
          },
          {
            "name": "Illela",
            "uuid": 7
          },
          {
            "name": "Isa",
            "uuid": 8
          },
          {
            "name": "Kebbe",
            "uuid": 9
          },
          {
            "name": "Kware",
            "uuid": 10
          },
          {
            "name": "Rabah",
            "uuid": 11
          },
          {
            "name": "Sabon Birni",
            "uuid": 12
          },
          {
            "name": "Shagari",
            "uuid": 13
          },
          {
            "name": "Silame",
            "uuid": 14
          },
          {
            "name": "Sokoto North",
            "uuid": 15
          },
          {
            "name": "Sokoto South",
            "uuid": 16
          },
          {
            "name": "Tambuwal",
            "uuid": 17
          },
          {
            "name": "Tangaza",
            "uuid": 18
          },
          {
            "name": "Tureta",
            "uuid": 19
          },
          {
            "name": "Wamako",
            "uuid": 20
          },
          {
            "name": "Wurno",
            "uuid": 21
          },
          {
            "name": "Yabo",
            "uuid": 22
          }
        ]
      },
      {
        "name": "Taraba State",
        "uuid": 35,
        "locals": [
          {
            "name": "Bali",
            "uuid": 1
          },
          {
            "name": "Donga",
            "uuid": 2
          },
          {
            "name": "Gashaka",
            "uuid": 3
          },
          {
            "name": "Gassol",
            "uuid": 4
          },
          {
            "name": "Ibi",
            "uuid": 5
          },
          {
            "name": "Jalingo",
            "uuid": 6
          },
          {
            "name": "Karim Lamido",
            "uuid": 7
          },
          {
            "name": "Kumi",
            "uuid": 8
          },
          {
            "name": "Lau",
            "uuid": 9
          },
          {
            "name": "Sardauna",
            "uuid": 10
          },
          {
            "name": "Takum",
            "uuid": 11
          },
          {
            "name": "Ussa",
            "uuid": 12
          },
          {
            "name": "Wukari",
            "uuid": 13
          },
          {
            "name": "Yorro",
            "uuid": 14
          },
          {
            "name": "Zing",
            "uuid": 15
          }
        ]
      },
      {
        "name": "Yobe State",
        "uuid": 36,
        "locals": [
          {
            "name": "Bursari",
            "uuid": 1
          },
          {
            "name": "Damaturu",
            "uuid": 2
          },
          {
            "name": "Fika",
            "uuid": 3
          },
          {
            "name": "Fune",
            "uuid": 4
          },
          {
            "name": "Geidam",
            "uuid": 5
          },
          {
            "name": "Gujba",
            "uuid": 6
          },
          {
            "name": "Gulani",
            "uuid": 7
          },
          {
            "name": "Jakusko",
            "uuid": 8
          },
          {
            "name": "Karasuwa",
            "uuid": 9
          },
          {
            "name": "Machina",
            "uuid": 10
          },
          {
            "name": "Nangere",
            "uuid": 11
          },
          {
            "name": "Nguru",
            "uuid": 12
          },
          {
            "name": "Potiskum",
            "uuid": 13
          },
          {
            "name": "Tarmuwa",
            "uuid": 14
          },
          {
            "name": "Yunusari",
            "uuid": 15
          },
          {
            "name": "Yusufari",
            "uuid": 16
          }
        ]
      },
      {
        "name": "Zamfara State",
        "uuid": 37,
        "locals": [
          {
            "name": "Bakura",
            "uuid": 1
          },
          {
            "name": "Birnin Magaji/Kiyaw",
            "uuid": 2
          },
          {
            "name": "Bukkuyum",
            "uuid": 3
          },
          {
            "name": "Bungudu",
            "uuid": 4
          },
          {
            "name": "Gummi",
            "uuid": 5
          },
          {
            "name": "Gusau",
            "uuid": 6
          },
          {
            "name": "Kaura Namoda",
            "uuid": 7
          },
          {
            "name": "Maradun",
            "uuid": 8
          },
          {
            "name": "Maru",
            "uuid": 9
          },
          {
            "name": "Shinkafi",
            "uuid": 10
          },
          {
            "name": "Talata Mafara",
            "uuid": 11
          },
          {
            "name": "Chafe",
            "uuid": 12
          },
          {
            "name": "Zurmi",
            "uuid": 13
          }
        ]
      }
    ];
    const countries = [ 
      {uuid: '1', name: 'Afghanistan', code: 'AF'}, 
      {uuid: '2', name: 'Åland Islands', code: 'AX'}, 
      {uuid: '3', name: 'Albania', code: 'AL'}, 
      {uuid: '4', name: 'Algeria', code: 'DZ'}, 
      {uuid: '5', name: 'American Samoa', code: 'AS'}, 
      {uuid: '6', name: 'AndorrA', code: 'AD'}, 
      {uuid: '7', name: 'Angola', code: 'AO'}, 
      {uuid: '8', name: 'Anguilla', code: 'AI'}, 
      {uuid: '9', name: 'Antarctica', code: 'AQ'}, 
      {uuid: '10', name: 'Antigua and Barbuda', code: 'AG'}, 
      {uuid: '11', name: 'Argentina', code: 'AR'}, 
      {uuid: '12', name: 'Armenia', code: 'AM'}, 
      {uuid: '13', name: 'Aruba', code: 'AW'}, 
      {uuid: '14', name: 'Australia', code: 'AU'}, 
      {uuid: '15', name: 'Austria', code: 'AT'}, 
      {uuid: '16', name: 'Azerbaijan', code: 'AZ'}, 
      {uuid: '17', name: 'Bahamas', code: 'BS'}, 
      {uuid: '18', name: 'Bahrain', code: 'BH'}, 
      {uuid: '19', name: 'Bangladesh', code: 'BD'}, 
      {uuid: '20', name: 'Barbados', code: 'BB'}, 
      {uuid: '21', name: 'Belarus', code: 'BY'}, 
      {uuid: '23', name: 'Belgium', code: 'BE'}, 
      {uuid: '24', name: 'Belize', code: 'BZ'}, 
      {uuid: '25', name: 'Benin', code: 'BJ'}, 
      {uuid: '26', name: 'Bermuda', code: 'BM'}, 
      {uuid: '27', name: 'Bhutan', code: 'BT'}, 
      {uuid: '28', name: 'Bolivia', code: 'BO'}, 
      {uuid: '29', name: 'Bosnia and Herzegovina', code: 'BA'}, 
      {uuid: '30', name: 'Botswana', code: 'BW'}, 
      {uuid: '31', name: 'Bouvet Island', code: 'BV'}, 
      {uuid: '32', name: 'Brazil', code: 'BR'}, 
      {uuid: '33', name: 'British Indian Ocean Territory', code: 'IO'}, 
      {uuid: '34', name: 'Brunei Darussalam', code: 'BN'}, 
      {uuid: '35', name: 'Bulgaria', code: 'BG'}, 
      {uuid: '36', name: 'Burkina Faso', code: 'BF'}, 
      {uuid: '37', name: 'Burundi', code: 'BI'}, 
      {uuid: '38', name: 'Cambodia', code: 'KH'}, 
      {uuid: '39', name: 'Cameroon', code: 'CM'}, 
      {uuid: '40', name: 'Canada', code: 'CA'}, 
      {uuid: '41', name: 'Cape Verde', code: 'CV'}, 
      {uuid: '42', name: 'Cayman Islands', code: 'KY'}, 
      {uuid: '43', name: 'Central African Republic', code: 'CF'}, 
      {uuid: '44', name: 'Chad', code: 'TD'}, 
      {uuid: '45', name: 'Chile', code: 'CL'}, 
      {uuid: '46', name: 'China', code: 'CN'}, 
      {uuid: '47', name: 'Christmas Island', code: 'CX'}, 
      {uuid: '48', name: 'Cocos (Keeling) Islands', code: 'CC'}, 
      {uuid: '49', name: 'Colombia', code: 'CO'}, 
      {uuid: '50', name: 'Comoros', code: 'KM'}, 
      {uuid: '51', name: 'Congo', code: 'CG'}, 
      {uuid: '52', name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
      {uuid: '53', name: 'Cook Islands', code: 'CK'}, 
      {uuid: '54', name: 'Costa Rica', code: 'CR'}, 
      {uuid: '55', name: 'Cote D\'Ivoire', code: 'CI'}, 
      {uuid: '56', name: 'Croatia', code: 'HR'}, 
      {uuid: '57', name: 'Cuba', code: 'CU'}, 
      {uuid: '58', name: 'Cyprus', code: 'CY'}, 
      {uuid: '59', name: 'Czech Republic', code: 'CZ'}, 
      {uuid: '60', name: 'Denmark', code: 'DK'}, 
      {uuid: '61', name: 'Djibouti', code: 'DJ'}, 
      {uuid: '62', name: 'Dominica', code: 'DM'}, 
      {uuid: '63', name: 'Dominican Republic', code: 'DO'}, 
      {uuid: '64', name: 'Ecuador', code: 'EC'}, 
      {uuid: '65', name: 'Egypt', code: 'EG'}, 
      {uuid: '66', name: 'El Salvador', code: 'SV'}, 
      {uuid: '67', name: 'Equatorial Guinea', code: 'GQ'}, 
      {uuid: '68', name: 'Eritrea', code: 'ER'}, 
      {uuid: '69', name: 'Estonia', code: 'EE'}, 
      {uuid: '70', name: 'Ethiopia', code: 'ET'}, 
      {uuid: '71', name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
      {uuid: '72', name: 'Faroe Islands', code: 'FO'}, 
      {uuid: '73', name: 'Fiji', code: 'FJ'}, 
      {uuid: '74', name: 'Finland', code: 'FI'}, 
      {uuid: '75', name: 'France', code: 'FR'}, 
      {uuid: '76', name: 'French Guiana', code: 'GF'}, 
      {uuid: '77', name: 'French Polynesia', code: 'PF'}, 
      {uuid: '78', name: 'French Southern Territories', code: 'TF'}, 
      {uuid: '79', name: 'Gabon', code: 'GA'}, 
      {uuid: '80', name: 'Gambia', code: 'GM'}, 
      {uuid: '81', name: 'Georgia', code: 'GE'}, 
      {uuid: '82', name: 'Germany', code: 'DE'}, 
      {uuid: '83', name: 'Ghana', code: 'GH'}, 
      {uuid: '84', name: 'Gibraltar', code: 'GI'}, 
      {uuid: '85', name: 'Greece', code: 'GR'}, 
      {uuid: '86', name: 'Greenland', code: 'GL'}, 
      {uuid: '87', name: 'Grenada', code: 'GD'}, 
      {uuid: '88', name: 'Guadeloupe', code: 'GP'}, 
      {uuid: '89', name: 'Guam', code: 'GU'}, 
      {uuid: '90', name: 'Guatemala', code: 'GT'}, 
      {uuid: '90', name: 'Guernsey', code: 'GG'}, 
      {uuid: '91', name: 'Guinea', code: 'GN'}, 
      {uuid: '92', name: 'Guinea-Bissau', code: 'GW'}, 
      {uuid: '93', name: 'Guyana', code: 'GY'}, 
      {uuid: '94', name: 'Haiti', code: 'HT'}, 
      {uuid: '95', name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
      {uuid: '96', name: 'Holy See (Vatican City State)', code: 'VA'}, 
      {uuid: '97', name: 'Honduras', code: 'HN'}, 
      {uuid: '98', name: 'Hong Kong', code: 'HK'}, 
      {uuid: '99', name: 'Hungary', code: 'HU'}, 
      {uuid: '100', name: 'Iceland', code: 'IS'}, 
      {name: 'India', code: 'IN'}, 
      {name: 'Indonesia', code: 'ID'}, 
      {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
      {name: 'Iraq', code: 'IQ'}, 
      {name: 'Ireland', code: 'IE'}, 
      {name: 'Isle of Man', code: 'IM'}, 
      {name: 'Israel', code: 'IL'}, 
      {name: 'Italy', code: 'IT'}, 
      {name: 'Jamaica', code: 'JM'}, 
      {name: 'Japan', code: 'JP'}, 
      {name: 'Jersey', code: 'JE'}, 
      {name: 'Jordan', code: 'JO'}, 
      {name: 'Kazakhstan', code: 'KZ'}, 
      {name: 'Kenya', code: 'KE'}, 
      {name: 'Kiribati', code: 'KI'}, 
      {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
      {name: 'Korea, Republic of', code: 'KR'}, 
      {name: 'Kuwait', code: 'KW'}, 
      {name: 'Kyrgyzstan', code: 'KG'}, 
      {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
      {name: 'Latvia', code: 'LV'}, 
      {name: 'Lebanon', code: 'LB'}, 
      {name: 'Lesotho', code: 'LS'}, 
      {name: 'Liberia', code: 'LR'}, 
      {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
      {name: 'Liechtenstein', code: 'LI'}, 
      {name: 'Lithuania', code: 'LT'}, 
      {name: 'Luxembourg', code: 'LU'}, 
      {name: 'Macao', code: 'MO'}, 
      {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
      {name: 'Madagascar', code: 'MG'}, 
      {name: 'Malawi', code: 'MW'}, 
      {name: 'Malaysia', code: 'MY'}, 
      {name: 'Maldives', code: 'MV'}, 
      {name: 'Mali', code: 'ML'}, 
      {name: 'Malta', code: 'MT'}, 
      {name: 'Marshall Islands', code: 'MH'}, 
      {name: 'Martinique', code: 'MQ'}, 
      {name: 'Mauritania', code: 'MR'}, 
      {name: 'Mauritius', code: 'MU'}, 
      {name: 'Mayotte', code: 'YT'}, 
      {name: 'Mexico', code: 'MX'}, 
      {name: 'Micronesia, Federated States of', code: 'FM'}, 
      {name: 'Moldova, Republic of', code: 'MD'}, 
      {name: 'Monaco', code: 'MC'}, 
      {name: 'Mongolia', code: 'MN'}, 
      {name: 'Montserrat', code: 'MS'}, 
      {name: 'Morocco', code: 'MA'}, 
      {name: 'Mozambique', code: 'MZ'}, 
      {name: 'Myanmar', code: 'MM'}, 
      {name: 'Namibia', code: 'NA'}, 
      {name: 'Nauru', code: 'NR'}, 
      {name: 'Nepal', code: 'NP'}, 
      {name: 'Netherlands', code: 'NL'}, 
      {name: 'Netherlands Antilles', code: 'AN'}, 
      {name: 'New Caledonia', code: 'NC'}, 
      {name: 'New Zealand', code: 'NZ'}, 
      {name: 'Nicaragua', code: 'NI'}, 
      {name: 'Niger', code: 'NE'}, 
      {name: 'Nigeria', code: 'NG'}, 
      {name: 'Niue', code: 'NU'}, 
      {name: 'Norfolk Island', code: 'NF'}, 
      {name: 'Northern Mariana Islands', code: 'MP'}, 
      {name: 'Norway', code: 'NO'}, 
      {name: 'Oman', code: 'OM'}, 
      {name: 'Pakistan', code: 'PK'}, 
      {name: 'Palau', code: 'PW'}, 
      {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
      {name: 'Panama', code: 'PA'}, 
      {name: 'Papua New Guinea', code: 'PG'}, 
      {name: 'Paraguay', code: 'PY'}, 
      {name: 'Peru', code: 'PE'}, 
      {name: 'Philippines', code: 'PH'}, 
      {name: 'Pitcairn', code: 'PN'}, 
      {name: 'Poland', code: 'PL'}, 
      {name: 'Portugal', code: 'PT'}, 
      {name: 'Puerto Rico', code: 'PR'}, 
      {name: 'Qatar', code: 'QA'}, 
      {name: 'Reunion', code: 'RE'}, 
      {name: 'Romania', code: 'RO'}, 
      {name: 'Russian Federation', code: 'RU'}, 
      {name: 'RWANDA', code: 'RW'}, 
      {name: 'Saint Helena', code: 'SH'}, 
      {name: 'Saint Kitts and Nevis', code: 'KN'}, 
      {name: 'Saint Lucia', code: 'LC'}, 
      {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
      {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
      {name: 'Samoa', code: 'WS'}, 
      {name: 'San Marino', code: 'SM'}, 
      {name: 'Sao Tome and Principe', code: 'ST'}, 
      {name: 'Saudi Arabia', code: 'SA'}, 
      {name: 'Senegal', code: 'SN'}, 
      {name: 'Serbia and Montenegro', code: 'CS'}, 
      {name: 'Seychelles', code: 'SC'}, 
      {name: 'Sierra Leone', code: 'SL'}, 
      {name: 'Singapore', code: 'SG'}, 
      {name: 'Slovakia', code: 'SK'}, 
      {name: 'Slovenia', code: 'SI'}, 
      {name: 'Solomon Islands', code: 'SB'}, 
      {name: 'Somalia', code: 'SO'}, 
      {name: 'South Africa', code: 'ZA'}, 
      {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
      {name: 'Spain', code: 'ES'}, 
      {name: 'Sri Lanka', code: 'LK'}, 
      {name: 'Sudan', code: 'SD'}, 
      {name: 'Suriname', code: 'SR'}, 
      {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
      {name: 'Swaziland', code: 'SZ'}, 
      {name: 'Sweden', code: 'SE'}, 
      {name: 'Switzerland', code: 'CH'}, 
      {name: 'Syrian Arab Republic', code: 'SY'}, 
      {name: 'Taiwan, Province of China', code: 'TW'}, 
      {name: 'Tajikistan', code: 'TJ'}, 
      {name: 'Tanzania, United Republic of', code: 'TZ'}, 
      {name: 'Thailand', code: 'TH'}, 
      {name: 'Timor-Leste', code: 'TL'}, 
      {name: 'Togo', code: 'TG'}, 
      {name: 'Tokelau', code: 'TK'}, 
      {name: 'Tonga', code: 'TO'}, 
      {name: 'Trinidad and Tobago', code: 'TT'}, 
      {name: 'Tunisia', code: 'TN'}, 
      {name: 'Turkey', code: 'TR'}, 
      {name: 'Turkmenistan', code: 'TM'}, 
      {name: 'Turks and Caicos Islands', code: 'TC'}, 
      {name: 'Tuvalu', code: 'TV'}, 
      {name: 'Uganda', code: 'UG'}, 
      {name: 'Ukraine', code: 'UA'}, 
      {name: 'United Arab Emirates', code: 'AE'}, 
      {name: 'United Kingdom', code: 'GB'}, 
      {name: 'United States', code: 'US'}, 
      {name: 'United States Minor Outlying Islands', code: 'UM'}, 
      {name: 'Uruguay', code: 'UY'}, 
      {name: 'Uzbekistan', code: 'UZ'}, 
      {name: 'Vanuatu', code: 'VU'}, 
      {name: 'Venezuela', code: 'VE'}, 
      {name: 'Viet Nam', code: 'VN'}, 
      {name: 'Virgin Islands, British', code: 'VG'}, 
      {name: 'Virgin Islands, U.S.', code: 'VI'}, 
      {name: 'Wallis and Futuna', code: 'WF'}, 
      {name: 'Western Sahara', code: 'EH'}, 
      {name: 'Yemen', code: 'YE'}, 
      {name: 'Zambia', code: 'ZM'}, 
      {name: 'Zimbabwe', code: 'ZW'} 
    ]
    const location_attributes = [
        {
          "id": 12345,
          "uuid": "12345",
          "value": "Lagos",
          "concept": {
            "id": 12345,
            "uuid": "12345",
            "name": "state",
            "description": "What is the state of this location",
            "options": [
              {
                "id": 1,
                "uuid": "1",
                "value": "Abia"
              },
              {
                "id": 2,
                "uuid": "2",
                "value": "Adamawa"
              },
              {
                "id": 3,
                "uuid": "3",
                "value": "Akwaibom"
              },
              {
                "id": 4,
                "uuid": "4",
                "value": "Anambra"
              },
              {
                "id": 5,
                "uuid": "5",
                "value": "Lagos"
              }
            ],
            "type": {
              "id": 5,
              "uuid": "5",
              "name": "MODEL_ATTRIBUTE",
              "widget": "SINGLE_LIST_SELECT"
            }
          }
        },
        {
          "id": 12346,
          "uuid": "12346",
          "value": "Abia",
          "concept": {
            "id": 12346,
            "uuid": "12346",
            "name": "state",
            "description": "What is the country of this location",
            "options": [
              {
                "id": 1,
                "uuid": "1",
                "value": "Nigeria"
              },
              {
                "id": 2,
                "uuid": "2",
                "value": "Cameroon"
              },
              {
                "id": 3,
                "uuid": "3",
                "value": "United States of America"
              },
              {
                "id": 4,
                "uuid": "4",
                "value": "Kenya"
              },
              {
                "id": 4,
                "uuid": "4",
                "value": "Uganda"
              }
            ],
            "type": {
              "id": 5,
              "uuid": "5",
              "name": "MODEL_ATTRIBUTE",
              "widget": "SINGLE_LIST_SELECT"
            }
          }
        },
        {
          "id": 12346,
          "uuid": "12346",
          "value": "Mushin",
          "concept": {
            "id": 12346,
            "uuid": "12346",
            "name": "state",
            "description": "What is the country of this location",
            "options": [
              {
                "id": 1,
                "uuid": "1",
                "value": "Nigeria"
              },
              {
                "id": 2,
                "uuid": "2",
                "value": "Cameroon"
              },
              {
                "id": 3,
                "uuid": "3",
                "value": "United States of America"
              },
              {
                "id": 4,
                "uuid": "4",
                "value": "Kenya"
              },
              {
                "id": 4,
                "uuid": "4",
                "value": "Uganda"
              }
            ],
            "type": {
              "id": 5,
              "uuid": "5",
              "name": "MODEL_ATTRIBUTE",
              "widget": "SINGLE_LIST_SELECT"
            }
          }
        }
      ]
    
    return {locations, states, countries, location_attributes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(locations: Location[]): number {
    return locations.length > 0 ? Math.max(...locations.map(location => parseInt(location.uuid) + 1)) : 11;
  }

}