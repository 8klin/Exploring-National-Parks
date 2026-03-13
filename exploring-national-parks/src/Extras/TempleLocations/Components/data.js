import alterHall from "./Images/WTP_B20_Audrey_1.jpg";
import annenberg from "./Images/2.22_News_Renovations_AllieIppolito-2.jpg";
import beury from "./Images/temple_beuryhall2.jpg";
import engineering from "./Images/121071_COE-Building-27.png";
import gladfelter from "./Images/500px-Gladfelter_Hall.jpg";
import klein from "./Images/500px-Temple_University_Beasley_School_of_Law_(53564185276).jpg";
import serc from "./Images/500px-Science_and_Education_Research_Center.jpg";
import presser from "./Images/presser-hall-960x1275-2222509372.jpg";
import speakman from "./Images/O_TempleStudents_Via-900x600.jpg";
import tyler from "./Images/IMG_0157_HDR-1030x687.jpg";
import wachman from "./Images/500px-Wachman_Hall_(Temple_University)_-_IMG_6692.JPG";
import weiss from "./Images/weisshal.jpg";
import founders from "./Images/templeowl.jpg";
import belltower from "./Images/500px-Temple_University_Bell_Tower_in_winter.jpg";
import gittis from "./Images/500px-Howard_Gittis_Student_Center.jpg";
import tpac from "./Images/500px-Temple_University_Performing_Arts_Center_in_2016.jpg";
import liacouras from "./Images/liacroras_center.jpg";
import tech from "./Images/techcenter.jpg";
import charles from "./Images/500px-Charles_Library_in_2023.jpg";

const data = [
    {
        name: "Alter Hall",
        description: "The home of Temple's business school, Alter Hall was completed in 2008 for a cost of $80 million. The 217,000 square-foot, seven-story building was named for Dennis Alter, Temple alum and chairman and CEO of Advanta. Notable features include a three-story atrium, a sky bridge over Liacouras Walk, and a 177-foot elliptical stock ticker, the longest in America at the time. Located at Liacouras Walk and Montgomery Avenue, Alter Hall replaced Curtis Hall, which was built in 1955 and held 50 classrooms.",
        image: alterHall
    },
    {
        name: "Annenberg Hall and Tomlinson Theater",
        description: "Annenberg Hall houses the departments of Advertising, Journalism, and Media Studies and Production in the Klein College of Media and Communication. The four-floor structure cost about $7 million to erect in 1968. Annenberg Hall was named for Walter Annenberg and includes film and television production studios, smart classrooms, and Bell Tower Music, Temple's student-run record label. The Joe First Media Center links Annenberg Hall and the Tomlinson Theater and was built in 2002. The center is a communications and social hub for the college and includes a café, a multimedia information center, and a venue for displaying student work. Tomlinson Theater is a 450-seat proscenium theatre with a full orchestra pit. It opened in 1968 and was named for Temple Vice President Emeritus William Tomlinson. Randall Theater is an 80-seat black box theater named for Paul E. “Pop” Randall, who staged more than 100 productions during his 38 years as a professor of theater at Temple.",
        image: annenberg
    },
    {
        name: "Barton and Beury Halls",
        description: "Barton Hall and Beury Hall were constructed on both sides of 13th Street. The university razed several blocks of mostly occupied rowhomes to clear the space needed for these academic buildings. Barton Hall, which opened in 1959, was the original physical science building. It was replaced by the Science Education and Research Center and demolished in 2015 to make way for Charles Library. Beury Hall still stands and was built in 1963. In 2009, Beury Hall was renovated for $25 million. Improvements included infrastructure and lab upgrades, and wireless technology in classrooms and lecture halls. The building was named in honor of Charles Ezra Beury, who served as a trustee of Temple from 1913 to 1952 and was the university's second president from 1925 to 1941.",
        image: beury
    },
    {
        name: "College of Engineering Building",
        description: "The College of Engineering Building is located at 12th and Norris Street and was built in 1975. The Innovation, Design, Engineering and Applied Science (IDEAS) Hub is a $4.5 million renovation on the second floor of the College of Engineering building. Completed in 2020, the 8,000-square-foot space is outfitted with leading-edge tools including robotics and drone stations, additive manufacturing, and 3D printing labs.",
        image: engineering
    },
    {
        name: "Gladfelter and Mazur Halls",
        description: "Located over Polett Walk between 11th and 12th Streets, Gladfelter Hall and Mazur Hall opened in 1973 and are home to the College of Liberal Arts. The Grace Baptist Church, Russell Conwell's first church in Philadelphia, was demolished in 1969 to make room for Gladfelter Hall. Standing at 10 stories tall, the two buildings are connected by an elevated courtyard. In 2020, Temple embarked on an expansive renovation of Anderson and Gladfelter's public courtyard, a new glass atrium for Anderson Hall, and the creation of a gateway for the eastern entrance of campus.",
        image: gladfelter
    },
    {
        name: "Klein Hall",
        description: "Built in 1973, the Charles Klein Law Building is the main building for the Beasley School of Law. It is located on Broad Street and houses the law library, mock trial practice rooms, and the Duane Morris LLP Moot Court Room, which provides space for moot court competitions, lectures, and meetings.",
        image: klein
    },
    {
        name: "Science Education and Research Center (SERC)",
        description: "Home to seven research centers and institutes, the Science Education and Research Center opened in 2014. This 246,700 square-foot, seven-story building contains 52 research labs and 16 teaching labs and is LEED Gold Certified.",
        image: serc
    },
    {
        name: "Presser Hall and Rock Hall",
        description: "Located on opposite corners of Temple's Main Campus, Presser Hall and Rock Hall are the main buildings for the music departments of the Boyer College of Music and Dance.",
        image: presser
    },
    {
        name: "Speakman Hall",
        description: "Located on Liacouras Walk, Speakman Hall is the home of the School of Sport, Tourism and Hospitality Management. It was built for $3.3 million in 1966.",
        image: speakman
    },
    {
        name: "Tyler School of Art and Architecture Building",
        description: "In 2009, Temple's Tyler School of Art moved from suburban Elkins Park into a new 255,000 square-foot building at Temple's Main Campus.",
        image: tyler
    },
    {
        name: "Wachman Hall",
        description: "With entrances on both Broad Street and Liacouras Walk, Wachman Hall offers 12 floors of classroom space and is home to the College of Science and Technology's Mathematics Department.",
        image: wachman
    },
    {
        name: "Weiss Hall",
        description: "Located on Cecil B. Moore Avenue, Weiss Hall is home to the College of Liberal Arts' Psychology Department.",
        image: weiss
    },
    {
        name: "Founder's Garden and O'Connor Plaza",
        description: "At the heart of campus is Founder's Garden, the burial place of Russell Conwell, founder and 38-year president of Temple University.",
        image: founders
    },
    {
        name: "The Bell Tower",
        description: "A visual icon of Temple University, the Bell Tower was completed in 1966 and stands 110 feet tall in the center of Main Campus.",
        image: belltower
    },
    {
        name: "Howard Gittis Student Center",
        description: "Temple's Student Center has been located at 13th and Montgomery Streets since 1965.",
        image: gittis
    },
    {
        name: "Temple Performing Arts Center",
        description: "Built in 1891, the Temple Performing Arts Center is housed in what was originally the Grace Baptist Church.",
        image: tpac
    },
    {
        name: "Liacouras Center",
        description: "Located on Broad Street, the Liacouras Center is a 10,206-seat multipurpose arena that opened in 1997.",
        image: liacouras
    },
    {
        name: "TECH Center",
        description: "The Teaching, Education, Collaboration and Help Center is located at 12th Street and Montgomery Avenue and houses hundreds of computers and media studios.",
        image: tech
    },
    {
        name: "Charles Library",
        description: "Opened in 2019, Charles Library is a four-story building designed by the architectural firm Snøhetta.",
        image: charles
    }
];

export default data;