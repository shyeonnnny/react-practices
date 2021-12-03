import React, {Fragment, useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Message from './Message';
import styles from './assets/scss/MessageList.scss';
import modalStyles from "./assets/scss/modal.scss";

Modal.setAppElement('body');

export default function MessageList({messages, notifyMessage}) {
    const refForm = useRef(null);
    const [modalData, setModalData] = useState({isOpen: false}); // set은 값이바뀌면 감지를 하지만 {}는 {}안의 값이 바뀐다고 감지하는게아니라 주소가바껴야 감지함
    // isOpen은 객체로 넘겨줬기때문에 나중에 함수를 정의하면서 동적으로 추가가 가능하기때문에
    // 아래 notify 함수에서 label과 no와같은 속성을 추가해줬다.
   
    // 렌더링이 끝나고 실행됨 무조건
    useEffect(() =>{
        setTimeout(() => {
            refForm.current && refForm.current.password.focus();
        }, 200);
    }, [modalData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(e.target.password.value === '') {
                return;
            }

            // const response = await fetch(`/api/${modalData.messageNo}`, {
            //     method: 'delete',
            //     header: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json'
            //     },
            //     body: JSON.stringify({password: modalData.password})
            // });

            // if(!response.ok) {
            //     throw  `${response.status} ${response.statusText}`;
            // }

            // const jsonResult = response.json;


            // 비밀번호가 틀린 경우
            // jsonResult.data가  null
            setModalData(Object.assign({}, modalData, {label:'비밀번호가 일치하지 않습니다.', password: ''}));

            // 잘 삭제가 된 경우
            // jsonResult.data가 10
            setModalData({isOpen: false, password:''});
            notifyMessage.delete(modalData.messageNo);
        } catch (err) {
            console.error(err);
        }
    }

    const notifyDeleteMessage = (no) => {
        // 아래주석처럼하면 set으로 modalData를 불러도 새로객체를만든것이아니라 값이 추가되도 계속 똑같은주소를
        // 가르키기때문에 변화가없다고 감지함.
        // modalData.label ='2222'
        // setMadalData(modalData);

        setModalData({ // {}안에넣어주면 계속 새로운객체를 만들기때문에 setmodalData는 값이 변경되거나 추가된 새로운주소를 찾아가기때문에 화면을 새로 render를해줌 (객체생성을 안하고 그냥 선언하면 안바뀜)
            label: '작성시 입력했던 비밀번호를 입력 하세요.', 
            isOpen: true,
            messageNo: no,
            password: ''
        })
    }

    return (
        <Fragment> {/* 리스트 그려주는 곳 */}
            <ul className={styles.MessageList}>
                {messages.map(message => <Message key={`guestbook_message_${message.no}`}
                                                  no={message.no}
                                                  name={message.name}
                                                  message={message.message} 
                                                  notifyDeleteMessage={notifyDeleteMessage} />)}
            </ul>
            <Modal
                isOpen={modalData.isOpen}
                onRequestClose={ () => setModalData({isOpen: false}) } // 아래에서 true해주면 닫고나서 모달닫아주는함수를 실행해줘야함
                shouldCloseOnOverlayClick={true} // 버튼이아니라 밖을 눌러도 꺼지게해주는 속성
                className={modalStyles.Modal}
                overlayClassName={modalStyles.Overlay}
                style={{content: {width: 350}}}>
                <h1>비밀번호입력</h1>
                <div>
                    <form
                        id='myform'
                        ref={refForm}
                        className={styles.DeleteForm}
                        onSubmit={handleSubmit}>
                        <label>{modalData.label || ''}</label>
                        <input
                            type={'password'}
                            autoComplete={'off'}
                            name={'password'} // name으로주면 먹습니다~
                            value={modalData.password}
                            placeholder={'비밀번호'}
                            onChange={(e) => setModalData(Object.assign({}, modalData, {password: e.target.value}))}/>
                    </form>
                </div>
                <div className={modalStyles['modal-dialog-buttons']}>
                    <button onClick={ () => {
                        refForm.current.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}));
                        // ref를 해줘야 진짜 찐 <form>태그에 접근할 수 있음 (안써주면 접근못함)
                        // refForm.current : form 태그에 접근
                        // bubbles 달아주는이유 : bubbles는 밖으로퍼지면서 이벤트를 발생시키는데
                        // form태그에 onSubmit을 해줘도 form태그에 이벤트가 달리는게아니고 더욱 상단에 이벤트가 달리는데
                        // bubbles을 트루로 해줘야 form태그에서 밖으로 퍼지면서 상단태그까지 닿아서 이벤트가 발생되기때문
                    } }>확인</button>
                    <button onClick={() => {setModalData(Object.assign({}, modalData, {isOpen: false})) } }>취소</button>
                    {/* {}를 해주는이유는 새로운 객체를 만들어야 set이 새로운 주소를 가르키기때문
                    {}에 modalData를 넣어주면 결국 값이 바뀌어도 똑같은 주소를 가르키기때문에 변화가 없다고 생각한다. */}
                </div>
            </Modal>
        </Fragment>
    );
}

MessageList.propType = {
    message: PropTypes.arrayOf(PropTypes.shape(Message.propType))
}