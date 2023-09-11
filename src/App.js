import React, {useState} from 'react';
import './App.css';
import './index.css';
import Footer from "./components/molecules/Footer";
import AboutMe from "./components/templates/AboutMe";
import Section from "./components/organisms/Section";
import Article from "./components/molecules/Article";
import Container from "./components/atoms/Container";
import Main from "./components/atoms/Main";
import {
    articlesLink
} from "./components/molecules/Article/ArticleData";
import NavBarTitle from "./components/atoms/NavBarTitle";
import SearchBar from "./components/molecules/SearchBar";
import SwitchButton from "./components/molecules/SwitchButton";
import NavBar from "./components/organisms/NavBar";
import FooterSectionTitle from "./components/atoms/FooterSectionTitle";
import FooterSectionUndertitle from "./components/atoms/FooterSectionUndertitle";
import FooterSectionParagraph from "./components/atoms/FooterSectionParagraph";
import FooterContactTitle from "./components/atoms/FooterContactTitle";
import HomePageHeader from "./components/molecules/HomePageHeader";
import SectionTitle from "./components/atoms/SectionTitle";
import OneArticleCard from "./components/organisms/OneArticleCard";
import Button from "./components/atoms/Button";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [numberOfPosts, setNumberOfPosts] = useState(6);
    const sortedArticles = [...articlesLink].sort((a, b) => b.id - a.id);
    const filteredArticles = sortedArticles.filter(
        article =>
            (typeof article.title === 'string' && article.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (typeof article.body === 'string' && article.body.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (typeof article.date === 'string' && article.date.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    const articlesToDisplay = filteredArticles.slice(0, numberOfPosts);

    return (
        <div>
            <Container>
                <NavBar/>
                <HomePageHeader/>
                <Section
                    title="Ostatnie posty"
                    subtitle=""
                    body={
                        <>
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
                            {articlesToDisplay.map((article) => (
                                <OneArticleCard
                                    key={article.id}
                                    date={article.date}
                                    title={article.title}
                                    body={article.body}
                                />
                            ))}
                        </div>
                            <div className="flex justify-center items-center my-6">
                                <Button text="Zobacz więcej" onClick={() => {
                                    setNumberOfPosts(numberOfPosts + 6);
                                    console.log("Kliknięto przycisk, nowa liczba postów to:", numberOfPosts + 6);
                                }} />
                            </div>
                        </>
                    }
                />
            </Container>
            <Footer/>
        </div>
    );
}

export default App;
