﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Probashest
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотрудник.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудник CustomAttributes)

    // *** End programmer edit section *** (Сотрудник CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникE", new string[] {
            "ФИО as \'ФИО\'",
            "Должности as \'Должности\'",
            "Должности.Должность as \'Должность\'",
            "Карты as \'Карта\'",
            "Карты.КодКарты as \'Код карты\'",
            "ДатаРождения as \'Дата рождения\'",
            "ДанныеПаспорта as \'Данные паспорта\'",
            "Телефон as \'Телефон\'"}, Hidden=new string[] {
            "Должности.Должность",
            "Карты.КодКарты"})]
    [MasterViewDefineAttribute("СотрудникE", "Должности", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Должность")]
    [MasterViewDefineAttribute("СотрудникE", "Карты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Код карты")]
    [View("СотрудникL", new string[] {
            "ФИО as \'ФИО\'",
            "Должности.Должность as \'Должность\'",
            "Карты.КодКарты as \'Карта\'",
            "ДатаРождения as \'Дата рождения\'",
            "ДанныеПаспорта as \'Данные паспорта\'",
            "Телефон as \'Телефон\'"})]
    public class Сотрудник : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        private System.DateTime fДатаРождения;
        
        private int fДанныеПаспорта;
        
        private int fТелефон;
        
        private IIS.Probashest.Карты fКарты;
        
        private IIS.Probashest.Должности fДолжности;
        
        // *** Start programmer edit section *** (Сотрудник CustomMembers)

        // *** End programmer edit section *** (Сотрудник CustomMembers)

        
        /// <summary>
        /// ДанныеПаспорта.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.ДанныеПаспорта CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.ДанныеПаспорта CustomAttributes)
        public virtual int ДанныеПаспорта
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.ДанныеПаспорта Get start)

                // *** End programmer edit section *** (Сотрудник.ДанныеПаспорта Get start)
                int result = this.fДанныеПаспорта;
                // *** Start programmer edit section *** (Сотрудник.ДанныеПаспорта Get end)

                // *** End programmer edit section *** (Сотрудник.ДанныеПаспорта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.ДанныеПаспорта Set start)

                // *** End programmer edit section *** (Сотрудник.ДанныеПаспорта Set start)
                this.fДанныеПаспорта = value;
                // *** Start programmer edit section *** (Сотрудник.ДанныеПаспорта Set end)

                // *** End programmer edit section *** (Сотрудник.ДанныеПаспорта Set end)
            }
        }
        
        /// <summary>
        /// ДатаРождения.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.ДатаРождения CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.ДатаРождения CustomAttributes)
        public virtual System.DateTime ДатаРождения
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.ДатаРождения Get start)

                // *** End programmer edit section *** (Сотрудник.ДатаРождения Get start)
                System.DateTime result = this.fДатаРождения;
                // *** Start programmer edit section *** (Сотрудник.ДатаРождения Get end)

                // *** End programmer edit section *** (Сотрудник.ДатаРождения Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.ДатаРождения Set start)

                // *** End programmer edit section *** (Сотрудник.ДатаРождения Set start)
                this.fДатаРождения = value;
                // *** Start programmer edit section *** (Сотрудник.ДатаРождения Set end)

                // *** End programmer edit section *** (Сотрудник.ДатаРождения Set end)
            }
        }
        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Телефон CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Телефон CustomAttributes)
        public virtual int Телефон
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Телефон Get start)

                // *** End programmer edit section *** (Сотрудник.Телефон Get start)
                int result = this.fТелефон;
                // *** Start programmer edit section *** (Сотрудник.Телефон Get end)

                // *** End programmer edit section *** (Сотрудник.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Телефон Set start)

                // *** End programmer edit section *** (Сотрудник.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (Сотрудник.Телефон Set end)

                // *** End programmer edit section *** (Сотрудник.Телефон Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.ФИО CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.ФИО Get start)

                // *** End programmer edit section *** (Сотрудник.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Сотрудник.ФИО Get end)

                // *** End programmer edit section *** (Сотрудник.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.ФИО Set start)

                // *** End programmer edit section *** (Сотрудник.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Сотрудник.ФИО Set end)

                // *** End programmer edit section *** (Сотрудник.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Сотрудник.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Должности CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Должности CustomAttributes)
        [PropertyStorage(new string[] {
                "Должности"})]
        [NotNull()]
        public virtual IIS.Probashest.Должности Должности
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Должности Get start)

                // *** End programmer edit section *** (Сотрудник.Должности Get start)
                IIS.Probashest.Должности result = this.fДолжности;
                // *** Start programmer edit section *** (Сотрудник.Должности Get end)

                // *** End programmer edit section *** (Сотрудник.Должности Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Должности Set start)

                // *** End programmer edit section *** (Сотрудник.Должности Set start)
                this.fДолжности = value;
                // *** Start programmer edit section *** (Сотрудник.Должности Set end)

                // *** End programmer edit section *** (Сотрудник.Должности Set end)
            }
        }
        
        /// <summary>
        /// Сотрудник.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Карты CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Карты CustomAttributes)
        [PropertyStorage(new string[] {
                "Карты"})]
        [NotNull()]
        public virtual IIS.Probashest.Карты Карты
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Карты Get start)

                // *** End programmer edit section *** (Сотрудник.Карты Get start)
                IIS.Probashest.Карты result = this.fКарты;
                // *** Start programmer edit section *** (Сотрудник.Карты Get end)

                // *** End programmer edit section *** (Сотрудник.Карты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Карты Set start)

                // *** End programmer edit section *** (Сотрудник.Карты Set start)
                this.fКарты = value;
                // *** Start programmer edit section *** (Сотрудник.Карты Set end)

                // *** End programmer edit section *** (Сотрудник.Карты Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникE", typeof(IIS.Probashest.Сотрудник));
                }
            }
            
            /// <summary>
            /// "СотрудникL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникL", typeof(IIS.Probashest.Сотрудник));
                }
            }
        }
    }
}
