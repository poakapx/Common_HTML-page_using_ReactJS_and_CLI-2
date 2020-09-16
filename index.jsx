class Test1 extends React.Component
{
    render()
    {
        return  <table border="5" bordercolor="grey">
                    <tbody>
                        <tr>
                            <td rowspan="4"><img width="100%" height="50%" align="right" src={this.props.img1} alt="Классный фильмец!"></img></td>
                            <td style={styleObj1, styleObj2} align="left">Название фильма: {this.props.name1}</td>
                        </tr>
                        <tr >
                            <td style={styleObj1, styleObj2} align="left">ФИО режиссера: {this.props.producer1}</td>
                        </tr>
                        <tr>
                            <td style={styleObj1, styleObj2} align="left">Год выпуска: {this.props.yearofissue1}</td>
                        </tr>
                        <tr>
                            <td style={styleObj1, styleObj2} align="left">Киностудия: {this.props.studio1}</td>
                        </tr>
                    </tbody>
                </table>;
    }
}
class Test2 extends React.Component
{
    render()
    {
        return  <table border="5" bordercolor="grey">
                    <tbody>
                        <tr>
                            <td rowspan="5"><img width="100%" height="100%" align="right" src={this.props.thephoto} alt="Классный фильмец!"></img></td>
                            <td style={styleObj1, styleObj2} align="left">ФИО:</td>
                            <td style={styleObj1, styleObj2}>{this.props.full_name}</td>
                        </tr>
                        <tr>
                            <td style={styleObj1, styleObj2} align="left">Телефон:</td>
                            <td style={styleObj1, styleObj2}>{this.props.telephone}</td>
                        </tr>
                        <tr>
                            <td style={styleObj1, styleObj2} align="left">Email:</td>
                            <td style={styleObj1, styleObj2}>{this.props.email}</td>
                        </tr>
                        <tr>
                            <td style={styleObj1, styleObj2} align="left">Город проживания:</td>
                            <td style={styleObj1, styleObj2}>{this.props.city_of_residence}</td>
                        </tr>
                        <tr>
                            <td style={styleObj1, styleObj2} align="left">Опыт работы:</td>
                            <td style={styleObj1, styleObj2}>{this.props.skills}</td>
                        </tr>
                    </tbody>
                </table>;
    }
}
class Test3 extends React.Component
{
    render()
    {
        return  ;
    }
}


const styleObj1 =
{
    width: '256px',
    color: 'green'
}
const styleObj2 =
{
    fontSize: '66px'
}

ReactDOM.render
(
    <Test1 img1="megafilmlol.jpg" name1="Взломать блогеров" producer1="Максим Свешников" yearofissue1="2016" studio1="Базелевс"></Test1>,
    document.getElementById('app1')
)
ReactDOM.render
(
    <Test2 thephoto="personal_page.jpg" full_name="Отсосидзе Великописечь" telephone="+380 427 562 753" email="the_otsosidze_007@mail.ua" city_of_residence="Штат Мухосранск" skills="N/A"></Test2>,
    document.getElementById('app2')
)
ReactDOM.render
(
    <Test3></Test3>,
    document.getElementById('app3')
)