import React, { useEffect } from 'react';
import $ from 'jquery';
import inView from 'in-view';
import '../../style/Note.css';

const Note = () => {
    useEffect(() => {
        $(document).ready(function () {
            $('#nav-icon').click(function () {
                $(this).toggleClass('open');
                $(".overlay").toggleClass("open");
                $(".overlay a").toggleClass("open");
                $(".overlay p").toggleClass("open");
            });

            // Scroll Reveal
            inView('.square.blue')
                .on('enter', function (el) {
                    // element is now visible in the viewport
                    $(el).addClass("in-view");
                })
                .on('exit', function (el) {
                    // element has gone out of viewport
                    $(el).removeClass("in-view");
                });
        });

        // Cleanup function
        return () => {
            // Remove event listeners or perform any cleanup here
        };
    }, []);

    return (
       <div></div>
    );
};

export default Note;
