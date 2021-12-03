import React, {Fragment, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Message from './Message';
import styles from './assets/scss/MessageList.scss';
import modalStyles from "./assets/scss/modal.scss";
// o = {a:10, b:20}
// o1= {};
// o1.a = o.a
// o1.b = 30;

// o1 = {a:10, b: 30}
// Object.assign({}, o, {b:30}) // 빈객체, 변경하고싶은값, 변경할 값 (o에서 b의값을 30으로 바꾸겠다)
[]
Modal.setAppElement('body');

export default function MessageList({messages}) {

    const refForm = useRef(null);
    // const [isOpen, setIsOpen] = useState(false);
    // const [password, setPassword] = useState('');
    // const [messageNo, setMessageNo] = useState(0);
    const [modalData, setmodalData] = useState({inOpen: false});

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(e.target.password.value === ''){
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
        //     throw `${response.status} ${response.statusText}}`;
        // }
        // const jsonResult = response.json;

        // 비밀번호가 틀린 경우
        // jsonResult.data = null;
        setModalData(Object.assign({}, modalData, {label: '비밀번호가 일치하지 않습니다.', password: ''}));

        // 잘 삭제가 된 경우
        // jsonResult.data = 10
        setModalData({inOpen: false, password: ''});
        notifyMessage.dalete(modalData.messageNo);
        console.log("삭제!!!!!:", messageNo, e.target.password.value, password );
    }

    const notifyDeleteMessage = (no) => {
        // console.log('click:' + no);
        // setMessageNo(no);
        // setIsOpen(true);
        setmodalData({ // {}안에넣어주면 계속 새로운객체를 만들기때문에 setmodalData는 값이 변경되거나 추가된 새로운주소를 찾아가기때문에 화면을 새로 render를해줌 (객체생성을 안하고 그냥 선언하면 안바뀜)
            label: '작성시 입력했던 비밀번호를 입력 하세요.',
            isOpen: true,
            messageNo: no,
            password: ''
        })
    }

    return (
        <Fragment>
            <ul className={styles.MessageList}>
                {messages.map(message => <Message key={`guestbook_message_${message.no}`}
                                                  no={message.no}
                                                  name={message.name}
                                                  message={message.message}
                                                  notifyDeleteMessage={notifyDeleteMessage} />)}
            </ul>
            <Modal
                isOpen={modalData.isOpen}
                onRequestClose={() => setmodalData({inOpen: false})}
                shouldCloseOnOverlayClick={true}
                className={modalStyles.Modal}
                overlayClassName={modalStyles.Overlay}
                style={{content: {width: 350}}}>
                <h1>비밀번호입력</h1>
                <div>
                    <form 
                        ref={refForm}
                        className={styles.DeleteForm}
                        onSubmit={handleSubmit}>
                        <label>작성시 입력했던 비밀번호를 입력 하세요.</label>
                        <input
                            type={'password'}
                            autoComplete={'off'}
                            name={'password'}
                            value={modalData.password}
                            placeholder={'비밀번호'}
                            onChange={(e) => setModalData(Object.assign({}, modalData, {inOpen: password}))}/>
                    </form>
                </div>
                <div className={modalStyles['modal-dialog-buttons']}>
                    <button onClick={ () => {
                        console.log()
                        refForm.current.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}));
                    }}>확인</button>
                    <button onClick={() => {setModalData(Object.assign({}, modalData, {isOpen: false}))}}>취소</button>
                </div>
            </Modal>
        </Fragment>
    );
}

MessageList.propType = {
    message: PropTypes.arrayOf(PropTypes.shape(Message.propType))
}