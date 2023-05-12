package com.ivanfranchin.bookapi.repository;

import com.ivanfranchin.bookapi.model.ClassesData;
import com.ivanfranchin.bookapi.model.Membership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ClassesDataRepository extends JpaRepository<ClassesData, String> {

    @Query("SELECT COUNT(c.id) as classCount, c.locationId as locationId, date(c.startDate) as classDate "
            + "FROM ClassesData c "
            + "WHERE c.startDate BETWEEN :startDate AND :endDate "
            + "GROUP BY c.locationId, date(c.startDate) "
            + "ORDER BY c.locationId ASC, classDate ASC")
    List<Object[]> findClassCountByLocationAndDate(@Param("startDate") Date startDate, @Param("endDate") Date endDate);

    @Query("SELECT cd.locationId, COUNT(rc.id), cd.startDate " +
            "FROM ClassesData cd " +
            "JOIN RegisteredClasses rc ON cd.classId = rc.classes_id " +
            "WHERE cd.startDate BETWEEN :startDate AND :endDate " +
            "GROUP BY cd.locationId, cd.startDate")
    List<Object[]> countEnrollmentsByLocationAndStartDate(@Param("startDate") Date startDate,
                                                          @Param("endDate") Date endDate);
}
