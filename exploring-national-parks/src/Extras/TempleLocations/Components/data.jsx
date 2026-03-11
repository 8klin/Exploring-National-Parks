const items = [
    {
        name: "Alter Hall",
        description: "The home of Temple's business school, Alter Hall was completed in 2008 for a cost of $80 million. The 217,000 square-foot, seven-story building was named for Dennis Alter, Temple alum and chairman and CEO of Advanta. Notable features include a three-story atrium, a sky bridge over Liacouras Walk, and a 177-foot elliptical stock ticker, the longest in America at the time. Located at Liacouras Walk and Montgomery Avenue, Alter Hall replaced Curtis Hall, which was built in 1955 and held 50 classrooms.\n",
        image: "/src/Extras/TempleLocations/Components/Images/WTP_B20_Audrey_1.jpg",
    },
    {
        name: "Annenberg Hall and Tomlinson Theater",
        description: "Annenberg Hall houses the departments of Advertising, Journalism, and Media Studies and Production in the Klein College of Media and Communication. The four-floor structure cost about $7 million to erect in 1968. Annenberg Hall was named for Walter Annenberg and includes film and television production studios, smart classrooms, and Bell Tower Music, Temple's student-run record label.\n" +
            "The Joe First Media Center links Annenberg Hall and the Tomlinson Theater and was built in 2002. The center is a communications and social hub for the college and includes a café, a multimedia information center, and a venue for displaying student work.\n" +
            "Tomlinson Theater is a 450-seat proscenium theatre with a full orchestra pit. It opened in 1968 and was named for Temple Vice President Emeritus William Tomlinson. Randall Theater is an 80-seat black box theater named for Paul E. “Pop” Randall, who staged more than 100 productions during his 38 years as a professor of theater at Temple.\n",
        image: "/src/Extras/TempleLocations/Components/Images/2.22_News_Renovations_AllieIppolito-2.jpg",
    },
    {
        name: "Barton and Beury Halls",
        description: "Barton Hall and Beury Hall were constructed on both sides of 13th Street. The university razed several blocks of mostly occupied rowhomes to clear the space needed for these academic buildings. Barton Hall, which opened in 1959, was the original physical science building. It was replaced by the Science Education and Research Center and demolished in 2015 to make way for Charles Library.\n" +
            "Beury Hall still stands and was built in 1963. In 2009, Beury Hall was renovated for $25 million. Improvements included infrastructure and lab upgrades, and wireless technology in classrooms and lecture halls. The building was named in honor of Charles Ezra Beury, who served as a trustee of Temple from 1913 to 1952 and was the university's second president from 1925 to 1941.\n",
        image: "/src/Extras/TempleLocations/Components/Images/temple_beuryhall2.jpg",
    },
    {
        name: "College of Engineering Building",
        description: "The College of Engineering Building is located at 12th and Norris Street and was built in 1975.\n" +
            "The Innovation, Design, Engineering and Applied Science (IDEAS) Hub is a $4.5 million renovation on the second floor of the College of Engineering building. Completed in 2020, the 8,000-square-foot space is outfitted with leading-edge tools including robotics and drone stations, additive manufacturing, and 3D printing labs.\n",
        image: "/src/Extras/TempleLocations/Components/Images/121071_COE-Building-27.png",
    },
    {
        name: "Gladfelter and Mazur Halls",
        description: "Located over Polett Walk between 11th and 12th Streets, Gladfelter Hall and Mazur Hall (formerly Anderson Hall) opened in 1973 and are home to the College of Liberal Arts. The Grace Baptist Church, Russell Conwell's first church in Philadelphia, was demolished in 1969 to make room for Gladfelter Hall. Standing at 10 stories tall, the two buildings are connected by an elevated courtyard.\n" +
            "In 2020, Temple embarked on an expansive renovation of Anderson and Gladfelter's public courtyard, a new glass atrium for Anderson Hall, and the creation of a gateway for the eastern entrance of campus. Originally named for Temple Presidents Millard E. Gladfelter and Paul R. Anderson, Anderson Hall was renamed Mazur Hall in 2021 for Temple alum and co-founder and chairman of Leonard-Meron Biosciences, Leonard Mazur and his wife Helena.\n",
        image: "/src/Extras/TempleLocations/Components/Images/500px-Gladfelter_Hall.jpg",
    },
    {
        name: "Klein Hall",
        description: "Built in 1973, the Charles Klein Law Building is the main building for the Beasley School of Law. It is located on Broad Street and houses the law library, mock trial practice rooms, and the Duane Morris LLP Moot Court Room, which provides space for moot court competitions, lectures, and meetings. Temple's law library spans the third to eighth floors of Klein Hall and includes seven levels of book stacks.\n",
        image: "/src/Extras/TempleLocations/Components/Images/500px-Temple_University_Beasley_School_of_Law_(53564185276).jpg",
    },
    {
        name: "Science Education and Research Center (SERC)",
        description: "Home to seven research centers and institutes, the Science Education and Research Center opened in 2014. This 246,700 square-foot, seven-story building contains 52 research labs and 16 teaching labs and is LEED Gold Certified. Programmed specifically as an interdisciplinary research and teaching facility, 1,900 linear feet of exterior sunshades lower the cost of heating and cooling and keep the sun's heat out of the building's labs.\n" +
            "It houses Temple's College of Science and Technology and is connected to Temple's Engineering Building via a two-story entrance atrium.\n",
        image: "/src/Extras/TempleLocations/Components/Images/500px-Science_and_Education_Research_Center.jpg",
    },
    {
        name: "Presser Hall and Rock Hall",
        description: "Located on opposite corners of Temple's Main Campus, Presser Hall and Rock Hall are the main buildings for the music departments of the Boyer College of Music and Dance.\n" +
            "Presser Hall, on 12th and Norris Street, shares a lobby and café with the Tyler School of Art. It houses practice rooms and classrooms, a recording studio, Klein Recital Hall, and Arronson Hall, a rehearsal space. The second floor is dedicated to Temple's Jazz Studies program.\n" +
            "Rock Hall, on Broad Street, originally belonged to the Philadelphia College of Osteopathic Medicine. It comprised two large lecture halls, three classrooms, and a gynecological operating room. Now it houses Rock Hall Auditorium, practice rooms, and the Presser Creative Music Technology Center. The 306-seat Rock Hall Auditorium is the premier recital and performance space for Boyer students. The Presser Creative Music Technology Center is located in the building's basement next to the Broad Street Line, which can be heard from the classroom.\n",
        image: "/src/Extras/TempleLocations/Components/Images/presser-hall-960x1275-2222509372.jpg",
    },
    {
        name: "Speakman Hall",
        description: "Located on Liacouras Walk, Speakman Hall is the home of the School of Sport, Tourism and Hospitality Management. It was built for $3.3 million in 1966 and served as the School of Business Administration building. A student-run Saxbys Coffee opened in Speakman Hall in 2018 as part of an experiential learning program partnership between Saxbys and the School of Sport, Tourism and Hospitality Management.\n",
        image: "/src/Extras/TempleLocations/Components/Images/O_TempleStudents_Via-900x600.jpg",
    },
    {
        name: "Tyler School of Art and Architecture Building",
        description: "In 2009, Temple's Tyler School of Art moved from suburban Elkins Park into a new 255,000 square-foot building at Temple's Main Campus. The building on 12th and Norris Street cost $76.4 million and integrated Temple's art school among the rest of the university. It includes gallery spaces, classrooms, and a café across four floors.\n" +
            "It shares an atrium and the café with the Boyer College of Music and Dance's Presser Hall, which occupied that space before the art school moved to Main Campus. Three years later, the architecture department moved into a new 50,000-square-foot Architecture Building connected to the new Tyler building.\n",
        image: "/src/Extras/TempleLocations/Components/Images/IMG_0157_HDR-1030x687.jpg",
    },
    {
        name: "Wachman Hall",
        description: "/src/Extras/TempleLocations/Components/Images/500px-Wachman_Hall_(Temple_University)_-_IMG_6692.JPG",
        image: "With entrances on both Broad Street and Liacouras Walk, Wachman Hall offers 12 floors of classroom space and is home to the College of Science and Technology's Mathematics Department. The building was renovated in 2015 to relieve congestion, improve environmental sustainability, and create a more welcoming appearance. Wachman Hall is LEED Gold Certified.\n",
    },
    {
        name: "Weiss Hall",
        description: "Located on Cecil B. Moore Avenue, Weiss Hall is home to the College of Liberal Arts' Psychology Department.",
        image: "/src/Extras/TempleLocations/Components/Images/weisshal.jpg",
    },
    {
        name: "Founder's Garden and O'Connor Plaza",
        description: "At the heart of campus is Founder's Garden, the burial place of Russell Conwell, founder and 38-year president of Temple University. A graduate of Yale, Civil War captain, Boston lawyer, and Philadelphia minister, Conwell used the income from his famous “Acres of Diamonds” speech to fund Temple as a place where working-class Philadelphians could receive higher education. A bust of Conwell marks his grave in the Founder's Garden.\n" +
            "O'Connor Plaza surrounds the Founder's Garden between Polett Walk and Liacouras Walk. A renovated plaza and Founder's Garden opened in 2017, featuring a large bronze owl statue commemorating the university's mascot, a water wall, and an inlaid Temple T in the brickwork of the plaza. O'Connor Plaza was named in honor of Board of Trustees Chair Patrick J. O’Connor and his wife, Marie.\n" +
            "O'Connor Plaza replaced Alumni Circle, which was a circular tiered brick wall. A sculpture called “Red Owl” mounted at Alumni Circle was given as a gift to Temple from Bell Atlantic after the university purchased an in-house telecommunications system from the company. Alumni Circle also served as a whispering gallery where echoes could be heard from the center of the circle.\n",
        image: "/src/Extras/TempleLocations/Components/Images/templeowl.jpg",
    },
    {
        name: "The Bell Tower",
        description: "A visual icon of Temple University, the Bell Tower was completed in 1966 and stands 110 feet tall in the center of Main Campus between Paley Hall and Beury Hall. In 2018, the tower's base and concrete plaza were renovated, and the landscaped circular base was named Lenfest Circle in honor of trustee H.F. Gerry Lenfest. The following year, lights were installed on the tower, illuminating it each evening.\n",
        image: "/src/Extras/TempleLocations/Components/Images/500px-Temple_University_Bell_Tower_in_winter.jpg",
    },
    {
        name: "Howard Gittis Student Center",
        description: "Temple's Student Center has been located at 13th and Montgomery Streets since 1965. Originally known as the Student Activities Center, the building was remodeled beginning in 2000. Renovations added an atrium, food court, lounge, and meeting spaces for student organizations.\n" +
            "Today it houses the campus bookstore, a UPS store, event spaces, a movie theater, and a game room. The building was renamed in 2006 after Temple Board of Trustees member Howard Gittis.\n",
        image: "/src/Extras/TempleLocations/Components/Images/500px-Howard_Gittis_Student_Center.jpg",
    },
    {
        name: "Temple Performing Arts Center",
        description: "Built in 1891, the Temple Performing Arts Center is housed in what was originally the Grace Baptist Church, the founding site of the university. The building hosted appearances by figures such as Martin Luther King Jr., President Franklin D. Roosevelt, and Helen Keller.\n" +
            "The university purchased the building in 1974. In 2010, it was converted into a 1,200-seat multipurpose performance venue with two event spaces: Lew Klein Hall and the Chapel. The center hosts concerts, performances by Temple's Boyer College of Music and Dance, and graduation ceremonies.\n",
        image: "/src/Extras/TempleLocations/Components/Images/500px-Temple_University_Performing_Arts_Center_in_2016.jpg",
    },
    {
        name: "Liacouras Center",
        description: "Located on Broad Street, the Liacouras Center is a 10,206-seat multipurpose arena that opened in 1997. Originally named “The Apollo of Temple,” it was renamed in 2000 for university president Peter J. Liacouras. It serves as the home arena for Temple Owls men's basketball and some women's basketball games.\n",
        image: "/src/Extras/TempleLocations/Components/Images/liacroras_center.jpg",
    },
    {
        name: "TECH Center",
        description: "The Teaching, Education, Collaboration and Help Center (TECH Center) is located at 12th Street and Montgomery Avenue. Built in 2006 at a cost of $16 million, the 75,000-square-foot facility houses more than 500 computers, breakout rooms, 3D printers, and media studios. It also includes recording booths and specialized labs for video editing, music production, and graphic design.\n",
        image: "/src/Extras/TempleLocations/Components/Images/techcenter.jpg",
    },
    {
        name: "Charles Library",
        description: "Opened in 2019, Charles Library is a four-story building designed by the architectural firm Snøhetta. The 220,000-square-foot facility includes meeting rooms, study spaces, media studios, and a green roof. The library holds about four million items, including books and electronic materials, and features an automated book retrieval system known as the BookBot.\n" +
            "Charles Library is Temple's fourth library, following College Hall, Sullivan Hall, and Paley Hall.\n",
        image: "/src/Extras/TempleLocations/Components/Images/500px-Charles_Library_in_2023.jpg",
    },
]