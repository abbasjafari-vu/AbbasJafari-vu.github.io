import api from "_controls/api";
import { Params } from "_types";
import Image from "next/image";
import tw from "tailwind-styled-components";

type Props = Params;
export default async function HomePage(props: Props) {
  const { params } = props;

  const data = await api("/category", params.lang);
  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
      <Author>
        <Image
          src="/images/person.png"
          width={200}
          height={300}
          alt=""
          className="bg-primary-gray rounded-2xl"
        />
        <About>
          <Hello>
            <HelloLine /> سلام
          </Hello>
          <div>
            <Title>عباس جعفری</Title>
            <SubTitle>توسعه دهنده</SubTitle>
          </div>
          <Bio>
            سلام! من عباس جعفری هستم، یک توسعه دهنده نرم افزار با تمرکز اصلی بر
            تکنولوژی های مدرن و جذاب از جمله React JS، Next JS، React Native، و
            Node JS. در زمینه توسعه نرم افزار و وب، توانسته‌ام مهارت‌های قوی در
            این زمینه‌ها را به دست آورم.
          </Bio>
        </About>
      </Author>
      <div className="text-primary-gray leading-7">
        <p>
          در حوزه React JS و Next JS، من توانسته‌ام برنامه‌های تحت وب پویا و
          جذابی بسازم. این فریمورک‌ها به من امکان می‌دهند تا رابط‌های کاربری
          شگفت‌انگیز و بدون تاخیر بسازم و از ویژگی‌های پیشرفته مانند SSR
          (Server-Side Rendering) و SEO friendly استفاده کنم.
        </p>
        <p>
          React Native همچنین یکی از علاقه‌مندی‌های من است. با استفاده از این
          فریمورک، توانسته‌ام برنامه‌های تلفن همراه چندسکویی و قابلیت‌های
          پیشرفته بسازم. این به من اجازه می‌دهد که برنامه‌های موبایل با تجربه
          کاربری عالی بسازم.
        </p>
        <p>
          Node JS نیز یکی از تخصص‌های من است که من را قادر می‌سازد تا برنامه‌های
          سمت سرور را بسازم و به عملکرد بهینه و کارایی بالا دست پیدا کنم. من
          توانسته‌ام برنامه‌های تحت وب با سرعت و پایداری بالا را توسعه دهم.
        </p>
        <p>
          من از چالش‌ها و پروژه‌های جدید همیشه لذت می‌برم و توانسته‌ام با
          تیم‌های متعددی در سرتاسر جهان همکاری کنم. به عنوان یک توسعه دهنده
          توانا و با تجربه، تمرکز من بر ارائه راه‌حل‌های نوآورانه و بهبود تجربه
          کاربری برای مشتریان و کارفرمایان است.
        </p>
        <p>خلاصه‌ای از مهارت‌های من:</p>
        <ul>
          <li>React JS و Next JS</li>
          <li>React Native</li>
          <li>Node JS</li>
          <li>توسعه وب مدرن</li>
          <li>ایجاد رابط‌های کاربری جذاب و واکنش‌گرا</li>
          <li>توسعه برنامه‌های موبایل تحت React Native</li>
          <li>توسعه برنامه‌های سمت سرور با Node JS</li>
        </ul>
        <p>
          با انگیزه به دنبال فرصت‌های جدید در دنیای توسعه نرم‌افزار هستم و آماده
          همکاری با تیم‌های پویا و پروژه‌های جذاب هستم. من به دنیای فناوری
          اعتقاد دارم و مهمترین هدف من ایجاد راهکارهای نوآورانه و مفید برای
          جامعه است.
        </p>
      </div>
    </div>
  );
}

const Author = tw.main`flex flex-col md:flex-row items-center gap-8 m-auto`;
const About = tw.div`flex flex-col gap-3`;
const Hello = tw.div`flex items-center gap-2`;
const HelloLine = tw.div`bg-primary-green w-4 h-0.5 rounded-full`;
const Title = tw.h2`text-lg`;
const SubTitle = tw.h3`text-xs text-primary-gray`;
const Bio = tw.p`text-primary-gray text-justify leading-7`;