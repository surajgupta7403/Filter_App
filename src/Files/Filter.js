import React, { useEffect } from 'react'
import './Filter.css'

const Filter = () => {
    useEffect(() => {
        const accordionItems = document.querySelectorAll('.accordion-item');
        accordionItems.forEach(item => {
            const accordionTitle = item.querySelector('.accordion-title');
            const accordionContent = item.querySelector('.accordion-content');
            accordionTitle.addEventListener('click', () => {
                item.classList.toggle('active');
                accordionContent.style.maxHeight = item.classList.contains('active') ? `${accordionContent.scrollHeight}px` : '0';
            });
            if (item.classList.contains('active')) {
                accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
            }
        });
    }, []);

    return (
        <div className="accordion">
            <div className="accordion-item active">
                <div className="accordion-title">Product Categories</div>
                <div className="accordion-content">
                    <input type="checkbox" id='1' value={1} />
                    <label htmlFor="1">Mobile</label>
                </div>
                <div className="accordion-content">
                    <input type="checkbox" id='2' value={2} />
                    <label htmlFor="2">Laptop</label>
                </div>
                <div className="accordion-content">
                    <input type="checkbox" id='3' value={3} />
                    <label htmlFor="3">Electronics</label>
                </div>
            </div>

            <div className="accordion-item active">
                <div class="accordion-title">Filter By Price</div>
                <div class="accordion-content">
                    {/* <span>0</span> */}
                    <input type="range" min={0} max={100000} />
                    {/* <span>100000</span> */}
                </div>
            </div>

            <div className="accordion-item active">
                <div class="accordion-title">Sort By</div>
                <div class="accordion-content">
                    <input type="radio" id='s1' value='s1' name='Price' />
                    <label htmlFor="s1">Price (Lowest First)</label>
                </div>
                <div class="accordion-content">
                    <input type="radio" id='s2' value='s2' name='Price' />
                    <label htmlFor="s2">Price (Hieghst First)</label>
                </div>
            </div>


            <div className="accordion-item active">
                <div class="accordion-title">BRAND</div>
                <div class="accordion-content">
                    <input type="checkbox" id='b1' value='b1' name='brand' />
                    <label htmlFor="b1">IPhone</label>
                </div>
                <div class="accordion-content">
                    <input type="checkbox" id='b2' value='b2' name='brand' />
                    <label htmlFor="b2">IQOO</label>
                </div>
                <div class="accordion-content">
                    <input type="checkbox" id='b3' value='b3' name='brand' />
                    <label htmlFor="b3">Samsung</label>
                </div>
                <div class="accordion-content">
                    <input type="checkbox" id='b4' value='b4' name='brand' />
                    <label htmlFor="b4">OnePlus</label>
                </div>
            </div>

            <div className="accordion-item active">
                <div class="accordion-title">CUSTOMER RATINGS</div>
                <div class="accordion-content">
                    <input type="checkbox" id='c1' value='c1' name='customer' />
                    <label htmlFor="c1">4 * & above</label>
                </div>
                <div class="accordion-content">
                    <input type="checkbox" id='c2' value='c2' name='customer' />
                    <label htmlFor="c2">3 * & above</label>
                </div>
            </div>

            <div className="accordion-item active">
                <div class="accordion-title">GST INVOICE AVAILABLE</div>
                <div class="accordion-content">
                    <input type="checkbox" id='gst' value='gst' name='gst' />
                    <label htmlFor="gst">GST Invoice Available</label>
                </div>
            </div>

            <div className="accordion-item active">
                <div class="accordion-title">RAM</div>
                <div class="accordion-content">
                    <input type="checkbox" id='ram1' value='ram1' name='Ram' />
                    <label htmlFor="ram1">4 GB</label>
                </div>
                <div class="accordion-content">
                    <input type="checkbox" id='ram2' value='ram2' name='Ram' />
                    <label htmlFor="ram2">3 GB</label>
                </div>
                <div class="accordion-content">
                    <input type="checkbox" id='ram3' value='ram3' name='Ram' />
                    <label htmlFor="ram3">2 GB</label>
                </div>
            </div>

            <div className="accordion-item active">
                <div class="accordion-title">INTERNAL STORAGE</div>
                <div class="accordion-content">
                    <input type="checkbox" id='storage1' value='storage1' name='Storage' />
                    <label htmlFor="storage1">256 GB & Above</label>
                </div>
                <div class="accordion-content">
                    <input type="checkbox" id='storage2' value='storage2' name='Storage' />
                    <label htmlFor="storage2">128 - 256.9 GB</label>
                </div>
                <div class="accordion-content">
                    <input type="checkbox" id='storage3' value='storage3' name='Storage' />
                    <label htmlFor="storage3">64-127.9 GB</label>
                </div>
                <div class="accordion-content">
                    <input type="checkbox" id='storage4' value='storage4' name='Storage' />
                    <label htmlFor="storage4">32 - 63.9 GB</label>
                </div>
            </div>
        </div>
    );
};

export default Filter;
