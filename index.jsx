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
class Test4 extends React.Component
{
    render()
    {
        return  <table bordercolor="grey">
                    <tbody>
                        <tr>
                            <td><img width="100%" align="left" src={this.props.img2} alt="Питомец"></img></td>
                            <td><b>{this.props.opisanie}</b></td>
                        </tr>
                    </tbody>
                </table>;
    }
}
class Test3 extends React.Component
{
    render()
    {
        return  <table border="5" bordercolor="grey"><tbody><tr><td><div>
                    <h2>Время: {this.props.date.toLocaleTimeString()}.</h2>
                </div></td></tr></tbody></table>;
    }
}
function tick()
{
    ReactDOM.render(
    <Test3 date={new Date()} />,
      document.getElementById('app3')
      );
}
setInterval(tick, 1000);

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
    <Test4 img2="pat.jpg" opisanie="Мадагаскарский таракан является одним из самых крупных представителей тропических насекомых. Средние размеры самцов и самок мадагаскарских тараканов – 60 и 55 мм. Родина тараканов –  остров Мадагаскар – дала название этим экзотическим насекомым. Мадагаскарские тараканы – идеальные домашние питомцы для почитателей экзотики. Они обладают колоритной внешностью, достаточно просты в содержании, неприхотливы в быту, плодовиты и доступны для покупки во многих зоомагазинах нашей страны. Кроме того, мадагаскарские тараканы являются хорошим кормом для других животных. Именно поэтому всё больше эти экзотические насекомые пользуются популярностью."></Test4>,
    document.getElementById('app4')
)
ReactDOM.render
(
    <Test3/>,
    document.getElementById('app3')
)