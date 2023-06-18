import Image from 'next/image'
import styles from './styles.module.css'


export default function Info() {
  return (
    <><><title>Informacion General</title>
      <div className={styles.container}>
        <div className={styles.text}>
          <h3>What does LGBTQ+ mean?</h3>
          <p>LGBTIQ+ is a universal acronym that represents the diversity of gender expressions and sexual orientations that has changed over time. They are the initials of Lesbian, Gay, Bisexual, Trans, Intersex, Queer and other identities. It usually ends with the symbol + to include other groups that are not named or represented by the previous abbreviations. They refer to minorities within the LGBTIQ+ collective as non-binary, asexual, demisexual or pansexual people.</p>
        </div>
        <Image src='/img1.jpg' width={500} height={350} className={styles.img}></Image>
      </div>
    </><>
        <div className={styles.container}>
          <div className={styles.text}>
            <h3>Meaning Of Their Colors</h3>
            <li className="mb-2 text-indigo-500">Pink represents sexuality</li>
              <li className="mb-2 text-red-500">Red represents life</li>
              <li className="mb-2 text-orange-500">Orange represents health</li>
              <li className="mb-2 text-yellow-500">Yellow represents the sun</li>
              <li className="mb-2 text-green-500">Green represents nature</li>
              <li className="mb-2 text-teal-500">Turquoise represents magic and art</li>
              <li className="mb-2 text-blue-500">Blue represents harmony and serenity</li>
              <li className="mb-2 text-purple-500">Violet represents the spirit</li>
          </div>
          <div className={styles.text}>
            <h3>Meaning Acronyms LGBTIQ+</h3>
            <li>Lesbian: Women and are attracted to other women</li>
            <li>Gay: Men who are attracted to other men</li>
            <li>Bisexual: Are attracted to people of the same gender and of the opposite gender</li>
            <li>Trans: It is the word that encompasses the set of identities of people who develop a gender identity other than the sex assigned at birth.</li>
            <li>Intersex: Are those whose bodies do not fit anatomically within the sexual patterns that constitute the binary system male/female</li>
            <li>Queer: it is not governed by gender impositions that are based on the assumption that human beings are limited to the identity of male and female</li>
          </div>
        </div>

        <div className={styles.container}>
          <Image src='/img3.jpg' width={500} height={350} className={styles.img}></Image>
          <div className={styles.text}>
            <h3>Gender identity</h3>
            <p>It is a person's deep-seated, internal sense of their gender. For transgender people, for example, their own internal gender identity does not match the sex they were assigned at birth. Most people have a gender identity of male or female (or boy or girl). For some people, their gender identity doesn't fit neatly into one of those two options (see non-binary and/or genderqueer below). Unlike gender expression (see below), gender identity is not visible to others.</p>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.text}>
            <h3>Gender expression</h3>
            <p>External manifestations of gender, expressed through a person's name, pronouns, clothing, haircut, behavior, voice, and/or body characteristics. Society identifies these signals as masculine and feminine, although what is considered masculine or feminine changes over time and varies by culture.</p>
          </div>
          <Image src='/img4.jpg' width={500} height={350} className={styles.img}></Image>
        </div>

        <div className={styles.container}>
          <div className={styles.text}>
            <h3>Sexual orientation</h3>
            <p>Describes a person's enduring physical, romantic, and/or emotional attraction to another person. Gender identity and sexual orientation are not the same. Transgender people can be straight, lesbian, gay, bisexual, or queer. For example, a person transitioning from male to female who is attracted only to men would typically identify as a heterosexual female.</p>
          </div>
          <div className={styles.text}>
            <h3>Gender dystrophy</h3>
            <p>Gender dysphoria is the term for a deep sense of discomfort and grief that can occur when your biological sex does not match your gender identity. In the past, this was called gender identity disorder. Symptoms of gender dysphoria in childhood: They insist that they belong to the other sex. They want to wake up belonging to the other sex. They prefer to participate in stereotypical games and activities of the other sex. They have negative feelings about their genitals.</p>
          </div>
        </div>
       
      </></>
  )
}
