//1. import the nodemailer 
import nodemailer from 'nodemailer'

//2. configure the mail and send it 
async function sendMail(){
    // 1. create an email  transporter
    // 2.SMTP (simple mail transfer mail protocol)

    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'rajnishdivakar618@gmail.com',
            pass:'hbvf jrml ezpr knui'
        }
    });


    //2. configure email content 
    const mailOptions={
        from :'rajnishdivakar618@gmail.com',
        to:'rajnishofficialforjob@gmail.com',
        subject:'Welcode to Node js Sevrer ',
        text:'This mail is only testing purpose please do not reply to this mail'
    }


    //  3. send the email
    try{
       const result=await transporter.sendMail(mailOptions);  // await is use to wait for finish the promises
       console.log("Email is sent successfully ")
    }catch(err){
        console.log("Email send failed due to this error"+err);
    }
}

sendMail();


