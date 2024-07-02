import React from 'react';
import Title from './Title';
import SubTitle from './SubTitle';
import './Home.css';
import pdf from './photos/pdf.png';
import word from './photos/word.png';
import excel from './photos/excel.png';
import ip from './photos/ip.png';
import Image from './photos/image.png';
import video from './photos/video.gif';
import cmd from './photos/cmd.png';

const Home = () => {
    return (
        <div className="home">
            <div style={{ marginBottom: "20px" }}>
                <Title text="Tools For All" />
            </div>
            <div style={{ marginBottom: "50px" }}>
                <SubTitle text="Coming Soon!" />
            </div>
            <div className="some-item" data-aos="fade" data-aos-duration="500">
                <div className="firstDiv">
                    <div style={{ display: "flex", marginBottom: "20px" }}>
                        <div style={{ width: "50px", marginRight: "10px" }}></div>
                        <div>
                            <p className="firstDivP">Discover all the tools you need in one place.</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", marginBottom: "20px" }}>
                        <div style={{ width: "50px", marginRight: "10px" }}>
                            <p className="firstDivP">&#10004;</p>
                        </div>
                        <div>
                            <p className="firstDivP">Convert your photos and videos to any format you desire.</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", marginBottom: "20px" }}>
                        <div style={{ width: "50px", marginRight: "10px" }}>
                            <p className="firstDivP">&#10004;</p>
                        </div>
                        <div>
                            <p className="firstDivP">Transform your documents effortlessly - PDF, Word, Excel, and PowerPoint.</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", marginBottom: "20px" }}>
                        <div style={{ width: "50px", marginRight: "10px" }}>
                            <p className="firstDivP">&#10004;</p>
                        </div>
                        <div>
                            <p className="firstDivP">Compare files seamlessly.</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", marginBottom: "20px" }}>
                        <div style={{ width: "50px", marginRight: "10px" }}>
                            <p className="firstDivP">&#10004;</p>
                        </div>
                        <div>
                            <p className="firstDivP">Scrape videos, photos, and audio from websites with ease.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ width: "100%", display:"flex",justifyContent:"center" }} id='video'>
                <img className='gif' src={video} alt="Preview GIF" />
            </div>


            <div className="some-item" id="rainbow" data-aos="fade" data-aos-duration="2500">
                <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Preview of Our Powerful Tools</h2>
                <div className="flexDiv">
                    {[{
                        img: pdf,
                        title: "PDF Conversion",
                        description: "Convert PDFs to various formats quickly and easily."
                    }, {
                        img: pdf,
                        title: "Merge PDF Files",
                        description: "Combine multiple PDF files into one in the order you prefer."
                    }, {
                        img: word,
                        title: "Word Conversion",
                        description: "Transform Word documents to different formats effortlessly."
                    }, {
                        img: word,
                        title: "Decrypt Word File",
                        description: "Remove encryption from Word files easily."
                    }, {
                        img: excel,
                        title: "Excel Conversion",
                        description: "Convert Excel files to various formats seamlessly."
                    }, {
                        img: pdf,
                        title: "Split PDF Files",
                        description: "Split large PDF files into smaller, more manageable pieces."
                    }, {
                        img: cmd,
                        title: "CMD & PS To EXE",
                        description: "Convert CMD and PowerShell scripts to executable files."
                    }, {
                        img: ip,
                        title: "What's My IP",
                        description: "Find out your current IP address quickly and easily."
                    }, {
                        img: Image,
                        title: "Image Conversion",
                        description: "Convert images to different formats with ease."
                    }, {
                        img: excel,
                        title: "Combine Workbooks",
                        description: "Merge multiple Excel workbooks into one comprehensive file."
                    }].map((tool, index) => (
                        <div className="marginDiv" key={index}>
                            <div className="btnDiv">
                                <img src={tool.img} alt={`${tool.title} logo`} />
                                <h2>{tool.title}</h2>
                                <p>{tool.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <h4 style={{ textAlign: "center", marginTop: "20px" }}>Discover More Functions on Our Website</h4>
            </div>
        </div>
    );
};

export default Home;
