const fs = require('fs');
let html = fs.readFileSync('e:/Freelance/Vtec/index.html', 'utf8');

const idTestimonials = html.indexOf('id="testimonials"');
const swiperWrapStart = html.indexOf('<div class="swiper-wrapper">', idTestimonials);
const navStart = html.indexOf('<!-- Navigation -->', swiperWrapStart);
const navEnd = html.indexOf('<!-- Pagination -->', navStart);
// find end of pagination div
const pagEnd = html.indexOf('</div>', html.indexOf('<div class="swiper-pagination">', navEnd)) + 6;

let newHtml = html.substring(0, swiperWrapStart) + 
'<div id="testimonials-wrapper" class="swiper-wrapper">\n                        <!-- Reviews injected by JS -->\n                    </div>\n                </div>\n                <!-- Navigation -->\n                <div class="swiper-button-next"></div>\n                <div class="swiper-button-prev"></div>\n';

newHtml += html.substring(pagEnd);

fs.writeFileSync('e:/Freelance/Vtec/index.html', newHtml);
console.log('Done');
