import React from 'react';
import CardList from './CardList';
import cards from './assets/json/data.json';
import './assets/css/styles.css';
// filter도 배열에 반복을 돌지만 맵은 반복돌면서 매핑하는애들을 차곡차곡 넣지만
// 필터는 card.status가 Todo인것만 받아간다. 배열리턴!
// ['1', '2', '3', '4'].filter((e)=> e > 2) : 3, 4가 리턴된다
export default function() {
    return (
        <div className='KanbanBoard'>
            <CardList key='ToDo' title={'ToDo'} cards={cards.filter((card) => card.status === 'ToDo') }/>
            <CardList key='Doing' title={'Doing'} cards={cards.filter((card) => card.status === 'Doing') }/>
            <CardList key='Done' title={'Done'} cards={cards.filter((card) => card.status === 'Done') }/>        
        </div>
    )
}