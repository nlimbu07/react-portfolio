import React, {useState} from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers'
import './resume.css'
import MyResume from '../../images/Resume_Niraj Limbu.pdf'

function Resume(){
    const [pages] = useState([
        {
            name: 'resume'
        }
    ])

    const [currentPage] = useState(pages[0]);

    return (
        <section>
            <div>
                <div>
                    <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                    <hr></hr>
                    <article class="secondary-content">

                <h3><u>Professional Experience</u></h3>
        <h4>Carrier Assistant</h4>
        <h4>USPS, Columbus, OH | 08-2018 to Present</h4>
        <ul>
            <li>Routes or cases all classes of mail in sequence of delivery along an established route. Rearranges and
                relabels cases as required.</li>
            <li>Delivers mail along a prescribed route, on foot or by vehicle, on a regular schedule, picking up
                additional mail from relay boxes as needed. Collects mail from street letter boxes and accepts letters
                from mailing from customers; on certain routes may deliver mail that consists exclusively of parcel
                post, or the collection of mail.</li>

        </ul>

        <h4>General Manager</h4>
        <h4>Panda Express, Phoenix, AZ | 11/2017 to 05/2018</h4>
        <ul>
            <li>Lead all or some People aspects of a Panda Express restaurant including hiring, training, coaching, and
                development.</li>
            <li>Lead all or some Guest components of a Panda Express restaurant including excellent food quality, guest
                service, associate friendliness, and restaurant cleanliness through your team using proven systems and
                routines.</li>
            <li>Lead all or some financial areas of a Panda Express restaurant including sales growth, cost management,
                and profit growth.</li>
        </ul>

        <h4>Job Developer/Employment Specialist</h4>
        <h4>Catholic Charities, Phoenix, Arizona | 03/2017 to 07/2017</h4>
        <ul>
            <li>Assessed the employment and education history of multilingual clients and generate unique career plans
                with a goal of self-sufficiency.</li>
            <li>Assisted clients in the completion of applications, preparation for interviews and assistance with
                keeping appointments.</li>
            <li>Actively developed employment opportunities by cultivating relationships with new employers and provided
                potential employers with orientation regarding our special clientele.</li>
            <li>Maintained all case documents, including documenting all client interactions, ensured files were up to
                date and accurate.</li>
        </ul>

        <h4>Resettlement and Placement Case Manager I</h4>
        <h4>Catholic Charities, Phoenix, Arizona | 08/2015 to 03/2017</h4>
        <ul>
            <li>Assessed the needs of the assigned refugee families by coordinating pre-arrival arrangements for food,
                housing, etc.; provided for airport reception; assisted with sponsor orientation; provided all core
                services as required.</li>
            <li>Developed a resettlement plan by meeting with refugee and sponsor; prioritized refugee needs, listened
                to the desires of refugee family; documented plan in the case record.</li>
            <li>Maintained accurate case records as outlined by program or agency procedure and protocols.</li>
        </ul>        

        <h3>Education</h3>
        <p>OSU BootCamp for Software Developer | Oct-2021 - Present</p>
        

        <h3>Language</h3>
        English, Nepali(native), Hindi & Urdu

        <h3>Achievement</h3>
        <ul>
            <li>Promoted to Job Developer, Catholic Charities, Phoenix, Arizona | 03/2017</li>            
        </ul>    
        <p className='text-center'>
            Click here to download my <a href={MyResume} download>Resume</a>
        </p>
    </article>

                </div>
            </div>
        </section>
    )
}

export default Resume;