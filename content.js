var content = $('body').html();

content = content.replace('<marquee', '<p');
content = content.replace('</marquee>', '</p>');

$('body').html(content);