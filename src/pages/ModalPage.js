import Modal from "../components/Modal";
import Button from "../components/Button";
import {useState} from "react";

function ModalPage() {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <Button onClick={handleClose} primary>I Accept</Button>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an importante agreement for you to accept
        </p>

    </Modal>

    return (
        <div>

            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cupiditate, eius exercitationem, hic in
                ipsam iure iusto, minima nemo odit quaerat reprehenderit similique sint tenetur veritatis voluptates.
                At, neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cupiditate, eius exercitationem, hic in
                ipsam iure iusto, minima nemo odit quaerat reprehenderit similique sint tenetur veritatis voluptates.
                At, neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cupiditate, eius exercitationem, hic in
                ipsam iure iusto, minima nemo odit quaerat reprehenderit similique sint tenetur veritatis voluptates.
                At, neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cupiditate, eius exercitationem, hic in
                ipsam iure iusto, minima nemo odit quaerat reprehenderit similique sint tenetur veritatis voluptates.
                At, neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cupiditate, eius exercitationem, hic in
                ipsam iure iusto, minima nemo odit quaerat reprehenderit similique sint tenetur veritatis voluptates.
                At, neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cupiditate, eius exercitationem, hic in
                ipsam iure iusto, minima nemo odit quaerat reprehenderit similique sint tenetur veritatis voluptates.
                At, neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cupiditate, eius exercitationem, hic in
                ipsam iure iusto, minima nemo odit quaerat reprehenderit similique sint tenetur veritatis voluptates.
                At, neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cupiditate, eius exercitationem, hic in
                ipsam iure iusto, minima nemo odit quaerat reprehenderit similique sint tenetur veritatis voluptates.
                At, neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cupiditate, eius exercitationem, hic in
                ipsam iure iusto, minima nemo odit quaerat reprehenderit similique sint tenetur veritatis voluptates.
                At, neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cupiditate, eius exercitationem, hic in
                ipsam iure iusto, minima nemo odit quaerat reprehenderit similique sint tenetur veritatis voluptates.
                At, neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cupiditate, eius exercitationem, hic in
                ipsam iure iusto, minima nemo odit quaerat reprehenderit similique sint tenetur veritatis voluptates.
                At, neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cupiditate, eius exercitationem, hic in
                ipsam iure iusto, minima nemo odit quaerat reprehenderit similique sint tenetur veritatis voluptates.
                At, neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cupiditate, eius exercitationem, hic in
                ipsam iure iusto, minima nemo odit quaerat reprehenderit similique sint tenetur veritatis voluptates.
                At, neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cupiditate, eius exercitationem, hic in
                ipsam iure iusto, minima nemo odit quaerat reprehenderit similique sint tenetur veritatis voluptates.
                At, neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cupiditate, eius exercitationem, hic in
                ipsam iure iusto, minima nemo odit quaerat reprehenderit similique sint tenetur veritatis voluptates.
                At, neque!
            </p>

        </div>
    );

}

export default ModalPage;
